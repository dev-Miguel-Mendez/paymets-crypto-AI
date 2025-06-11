//SPDX-License-identifier: MIT
pragma solidity ^0.8.30;



contract Subscriptions {

    struct Plan {
        uint cost;
        uint duration;
    }

    struct Subscription{
        uint start;
        uint nextPayment;
        bool active;
    }



	//✨✨ The plan ID corresponds directly to the index of the plan in the array✨✨
    Plan[3] public plans;

	address owner;


	mapping(address => Subscription) public subscriptions;
	mapping(address => uint) public userPlanId; // to track which plan the user subscribed to

	function getUserPlanId(address user) external view returns(uint planId, bool isActive, uint nextPayment){
		Subscription memory sub = subscriptions[user];
		uint plan_id = userPlanId[user];
		return (plan_id, sub.active, sub.nextPayment); //✨✨ example: (1, true) or (0, false)✨✨

	}

	constructor (){
		owner = msg.sender;
		//✨✨ We initialize plans in the constructor to avoid issues with memory in compilation✨✨
		plans[0] = Plan(0.001 ether, 30 days);
        plans[1] = Plan(0.002 ether, 30 days);
        plans[2] = Plan(0.003 ether, 30 days);
	}
    event PaymentReceived(address indexed subscriber, uint indexed planId, uint256 amount, uint date);
    event SubscriptionCreated(address indexed subscriber, uint256 indexed planId, uint256 date);
	event SubscriptionCancelled(address indexed subscriber, uint256 indexed planId, uint256 date);
	event Withdrawn(address indexed recipient, uint256 amount, uint256 date);

	
	//✨✨ Subscriptions are only triggered once. Once subscribed, you always ONLY call pay.✨✨
    function subscribe(uint planId) external payable {
        require(planId < plans.length, "invalid planId");
        Subscription storage  sub = subscriptions[msg.sender]; //⚠️⚠️ If you set this to memory instead of storage, it will not be updated ⚠️⚠️
        require(!sub.active, "Already subscribed"); 

        Plan memory plan = plans[planId];
        require(msg.value == plan.cost);
		

        sub.start = block.timestamp;
        sub.nextPayment = block.timestamp + plan.duration;
        sub.active = true;
		userPlanId[msg.sender] = planId;


        emit PaymentReceived(msg.sender, planId, plan.cost, block.timestamp);
        emit SubscriptionCreated(msg.sender, planId, block.timestamp);
    }


	//✨✨ You call pay only if you were subscribed before.✨✨
    function pay() external payable {
        Subscription storage sub = subscriptions[msg.sender]; //⚠️⚠️ If you set this to memory instead of storage, it will not be updated ⚠️⚠️
        require(sub.active, "no active subscription");

		uint planId = userPlanId[msg.sender];

		require(block.timestamp >= sub.nextPayment, "Payment not due"); 

		Plan memory plan = plans[planId]; 
		require(msg.value == plan.cost, "Incorrect ETH amount");

		sub.nextPayment = block.timestamp + plan.duration;

		emit PaymentReceived(msg.sender, planId, plan.cost, block.timestamp);
    }


	function cancel() external {
		Subscription storage sub = subscriptions[msg.sender];
		require(sub.active, "No active subscription");

		uint planId = userPlanId[msg.sender];

		delete subscriptions[msg.sender];
		delete userPlanId[msg.sender];
		emit SubscriptionCancelled(msg.sender, planId, block.timestamp);
	}

	modifier onlyOwner() {
		require(msg.sender == owner, "You must be the owner");
		_;
	}

	function withdraw() external onlyOwner {
		uint amount = address(this).balance; //✨✨ Only declared separately to add it in the event✨✨
		payable(owner).transfer(amount);
		emit Withdrawn(owner, amount, block.timestamp);
	}





}