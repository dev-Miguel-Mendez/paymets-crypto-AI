import cluster from 'node:cluster';


//* Make sure cluster is working:
cluster.schedulingPolicy = cluster.SCHED_RR;
if (cluster.isPrimary) {
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();

	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
} else {
	//* Make sure Typescript is working:
	const a: string = 'hello startup';
	console.log(a);

	//* Make sure environment variables are working:
	console.log(process.env.STARTUP!);
}

//* Make sure Vitest is working:
export const testThis = (someEnv: string) => {
	console.log('🚀 ~ testThis ~ some:', someEnv);
	return someEnv;
};

