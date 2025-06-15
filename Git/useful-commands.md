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
````
$ git init
# Turn an existing directory into a git repository

$ git clone [url]
# Clone an existing repository from GitHub, including all of the files, branches, and commits
````

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
````