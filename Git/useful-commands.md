## Install

[GitHub for Windows](https://windows.github.com)<br>
[GitHub for Mac](https://mac.github.com)<br>
[Git for All Platforms](http://git-scm.com)<br>

Git distributions for Linux and POSIX systems are available on
the official Git SCM web site.

## Create repositories

When starting out with a new repository, you only need to do it
once; either locally, then push to GitHub, or by cloning an
existing repository.

```
$ git init
# Turn an existing directory into a git repository

$ git clone [url]
# Clone an existing repository from GitHub, including all of the files, branches, and commits
```

## The .gitignore file

The `.gitignore` file is used to specify files or directories that should be ignored by Git.<br>
You can find helpful templates for `.gitignore` files at github.com/github/gitignore.

## Configure tooling

User information for alll local repositories

```
$ git config --global user.name "Your Name"
# Set your name for commits

$ git config --global user.email "your_email@example.com"
# Set your email for commits

$ git config --global color.ui auto
# Enable color in the command line interface
```

## Branches

Branches are used to isolate changes to a specific part of the codebase. This is useful for testing new features or bug fixes without affecting the main codebase.

```
$ git branch [branch-name]
# Create a new branch

$ git checkout [branch-name]
# Switch to a branch

$ git merge [branch-name]
# Merge a branch into the current branch

$ git branch -d [branch-name]
# Delete a branch
```

## Synchronize changes

Sinchronize the local repository with the remote repository.

```
$ git fetch
# Download the latest data from the remote repository

$ git merge
# Merge the changes from the remote repository into the current branch

$ git push
# Push the changes from the local repository to the remote repository

$ git pull
# Pull the changes from the remote repository into the current branch
```

## Make changes

Browse and inspect the evolution of project files.

```
$ git log
# Show a log of all commits made to the project

$ git log --follow [file-name]
# Show a log of all commits made to a specific file

$ git diff [first-branch] [second-branch]
# Show a diff of changes between two branches

$ git show [commit-hash]
# Show the contents of a specific commit

$ git add [file-name]
# Stage a file for the next commit

$ git commit -m "[commit-message]"
# Commit the staged changes with a meaningful message
```

## Redo commits

Erase mistakes and craft replacement history.

```
$ git reset [commit]
# Undoes all commits after [commit], preserving changes in the working directory

$ git reset --hard [commit]
# Undoes all commits after [commit], discarding changes in the working directory
```
