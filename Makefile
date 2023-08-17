setup-db:
    docker-compose -f local.yml up -d

clear-all:
    docker-compose -f local.yml down -v

clear:
    docker-compose -f local.yml down
