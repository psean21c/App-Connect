# Command Script for GIT repository

## Create New Project in the github and sync with your local
```
$ git checkout -b <mac1>
$ git push origin mac1
```


## Create branch before PR(Pull Request)
```
$ git checkout -b <your-branch>
$ git commit -m "added new module to project"
$ git push origin HEAD
```

# When you need to update your branch with master (Assume that you are at <your-branch>)
```
$ git checkout master
$ git pull
$ git checkout <your-branch>
$ git pull origin master
```

# Git stash/rebase (Assume that you are at <your-branch>)
```
$ git status
$ git stash
$ git checkout master
$ git pull
$ git checkout <your-branch>
$ git rebase master
$ git stash pop
```

# Reference
[VCS-GIT](https://www.git-tower.com/learn/git/ebook/en/command-line/basics/what-is-version-control#start)

[Medium : rebase vs. merge](https://medium.com/@checko/merging-two-git-repositories-into-one-preserving-the-git-history-4e20d3fafa4e)

[Jira : rebase vs. merge](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
