if [ "$1" = "vue" ]; then
  cd vue && npm run build && rm -rf  ../dist/* && mv dist/* ../dist/ && rmdir dist && cd ..
else
  cd vue && npm install && npm run build && mv dist/ ../dist/ && cd .. && docker-compose up --build
fi
