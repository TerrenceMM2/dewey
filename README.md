# Book Tracker

### 🚧  Under Construction  🚧

<hr />

Live Link: http://booktracker-env.eba-vxhiqmya.us-east-2.elasticbeanstalk.com/

### Contributers 

#### 👨‍💻Developer
* Name: Pete Wanca (@petewanca)
* Homepage: 
* e-mail: petewanca@gmail.com
* LinkedIn: [linkedin.com/in/petewanca](https://www.linkedin.com/in/petewanca/)

#### 👨‍💻Developer
* Name: Terrence Mahnken (@terrencemm2)
* Homepage: [terrence.codes](https://terrence.codes)
* e-mail: terrencemm2@gmail.com
* LinkedIn: [linkedin.com/in/terrencemahnken](https://www.linkedin.com/in/terrencemahnken/)

#### 👨‍💻Developer
* Name: Alec Down (@acd37)
* Homepage: [alecdown.com](https://alecdown.com)
* e-mail: alecdown@gmail.com
* LinkedIn: [https://www.linkedin.com/in/alecdown/](linkedin.com/in/alecdown)

### Push Instructions
If pushing React changes, please run `npm run build` from the `client` directory to update the `build` directory. AWS CodePipeline is configured to pull recent changes and deploy Elastic Beanstalk. The Elastic Beanstalk EC2 instance will server the static react files.

**Push Order**:
1. `cd client`
2. `npm run build`
3. `cd ..`
4. `git add -A`
5. `git commit -m <commit_message>`
6. `git push`