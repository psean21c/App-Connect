# Command Script for GIT repository

## Create GIT project in the GitHub
* refer to the google document MyDrive/4_IT/Git
1) Create repository in the gitHub

2) run the clone
```
* $ git clone https://github.com/psean21c/spark
* $ git push origin HEAD
```
3) modify .gitignore file to list of files to be ingored



## Create branch before PR(Pull Request)
```
$ git checkout -b <your-branch>
$ git commit -m "added new module to project"
$ git push origin HEAD

// below is the sample
$ git checkout -b mac1
$ git push origin mac1
```

## When you need to update your branch with master (Assume that you are at <your-branch>)
```
$ git checkout master
$ git pull
$ git checkout <your-branch>
$ git pull origin master
```

## Git stash/rebase (Assume that you are at <your-branch>)
```
$ git status
$ git stash
$ git checkout master
$ git pull
$ git checkout <your-branch>
$ git rebase master
$ git stash pop
```

## Reference
[VCS-GIT](https://www.git-tower.com/learn/git/ebook/en/command-line/basics/what-is-version-control#start)

[Medium : rebase vs. merge](https://medium.com/@checko/merging-two-git-repositories-into-one-preserving-the-git-history-4e20d3fafa4e)

[Jira : rebase vs. merge](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
