# Polling-API
A node based Polling API app mainly inspired from Quora and Stack Overflow.

## Dependency ##
1. Express
2. Mongoose

## Project Setup ##
1. Clone the project using git clone https://github.com/Piyush-zlatan/Polling-API.git
2. cd Polling-system
3. Run npm start


## Routes ##
1. /questions/create -> To create a question
2. /questions/:id/options/create -> To add options to a question
3. /questions/:id/delete -> To delete a question
4. /options/:id/delete -> To delete an option
5. /options/:id/add_vote -> To increment the count of votes
6. /questions/:id -> To view a question and it's options
