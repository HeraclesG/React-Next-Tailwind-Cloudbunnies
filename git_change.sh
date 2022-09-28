git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "AsaiTadao" ];
        then
                GIT_COMMITTER_NAME="Ares90125";
                GIT_AUTHOR_NAME="Ares90125";
                GIT_COMMITTER_EMAIL="queeNbee90125@gmail.com";
                GIT_AUTHOR_EMAIL="queeNbee90125@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD