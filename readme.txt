In this task I have created an express server which will store the current date and Time obtained from user in a file called date.txt in Post request. The same will be fetched from the file during the get request.

I have deployed this in Render.
https://nodejs-filesystem-a3un.onrender.com

Use the above link in postman to POST the time in the below format
{
    "time":"23-05-2023 13:20 IST"
}

On sending this post request in return the follwing response will be returned
[
    {
        "message": "Data saved Successfully",
        "savedData": "23-05-2023 13:20 IST"
    }
]

If we refresh the render url the updated time will be fetched as api through get request. At the same time the data will be stored in date.txt also

I tried the same using HTTP.createServer too. (Commented)

