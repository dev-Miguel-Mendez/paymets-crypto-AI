
Install rainbowkit in client
npm install @rainbow-me/rainbowkit wagmi viem @tanstack/react-query


#* ENV variables CLIENT:
1- The docker.env and local.env files are used only by Next.js. The client project imports shared environment variables from the shared folder, BUT ONLY the ones that are needed by both server and client.
2- NextJS is only loading by the bootstrap-env.ts file using "dotenv". 
3- No env are being loaded by default Next.js loader.
This is so that:
  a- Keep it similar to how I was doing it.
  b- I can load multiple env files with docker to, since it only allows one env file, (merging variables if you add more)  
