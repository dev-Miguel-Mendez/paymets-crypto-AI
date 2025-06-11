There are old components that don't use RainbowKit under DO_NOT_USE.

The ONLY MINIMAL DIFFERENCE is that they use the raw button to connect your Metamask wallet.

It is FASTER if you decide to do test with it.

Remember that you also need to change which connect button you are using in Navbar.tsx.

Also, configure Layout.tsx accordingly (to wrap with either <Providers> for RainbowKit or <AccountContextProvider> for raw Metamask connect).