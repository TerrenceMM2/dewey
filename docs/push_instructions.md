# Push Instructions
If pushing React changes, please run `npm run build` from the `client` directory to update the `build` directory. AWS CodePipeline is configured to pull recent changes and deploy Elastic Beanstalk. The Elastic Beanstalk EC2 instance will server the static react files.

**Push Order**:
1. `cd client`
2. `npm run build`
3. `cd ..`
4. `git add -A`
5. `git commit -m <commit_message>`
6. `git push`