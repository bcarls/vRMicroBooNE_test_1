# This repository is out of date, the current one can be found here: https://github.com/bcarls/vRMicroBooNE_test_2

# vRMicroBooNE_test_1

This is a prototype repository for the MicroBooNE VR project. 

The author of this README.md (Ben) stresses that this is the first GitHub repository he has setup. Some of the instructions may not quite work. Please let him know if something's wrong!

## Check out the code

These instructions will demonstrate how you can check the code out and run it with Unity. You do not need a GitHub account to do this. To checkout the project on a Mac, do the following:

    git clone https://github.com/bcarls/vRMicroBooNE_test_1

This will create a directory with the Unity project in it. To periodically update, perform the following:

    git pull origin master

## Committing to the repository 

In order to commit changes to the repository, you need to get a GitHub account. Secondly, email Ben and give him your GitHub username. He will add you as a contributor and you will be able to make commits. If you have only changed existing files, you can commit to your local git repository with:

    git commit -m "This is a test commit"
    
Now, if you have added any new files to your working directory that you would like to commit do the following:

    git add .
    git commit -m "This is a test commit"

Remember that git creates a local repository in you local directory. The add and commit commands above only send changes to that local repository. If you want the changes moved to the master repository (what's at https://github.com/bcarls/vRMicroBooNE_test_1), you need to perform the following:

    git push
    
When people run the pull command above to update their version, they will see your changes and be able to use them. 

