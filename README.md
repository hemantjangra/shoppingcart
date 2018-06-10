# shoppingcart
1. This Project is complteted using Mongo as DB, node as backend, React as front end library and Redux as store.

2. To Run this application, if you have mongo installed on local, please run mongorestore

3. Mongo Back up files are present on Mongo_BackUp/catdata, To restore please cd to "~/Mongo_BackUp/catdata" and run "mongorestore cartdata -d cartdata"

4. Once restored please cd to "cartapp".

5. "cartapp" is node app which fetched data from mongo using mongoose.

6. Once in "cartapp" folder run "npm install" and then "npm run".

7. Node is hosted on port 5000(localhost:5000)

8. Once node is upand running cd to "cartfrontendapp" and run "npm install"

9. Run "npm run" and this will launch application on "localhost:3000"

10. Open "localhost:3000" in browser and page will start appearing.

11. Remove item from cart works only on 'X' Button

12. All interactions are based on Redux Store.

13. Pop up Modal is not dynamic as of now.

14. In case Mongo is not installed data file is present with same JSON structure as Mongo data.

15. Data will be served from 'src/data/data.js'.
