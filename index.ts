{
    // Insert Data 

    // Insert Single Data in Database
    db.PracticeData.insertOne({ name: "Taskin Ahmad", id: 15 })

    //Insert Multiple Data. It must be an Array of obbject
    db.PracticeData.insertMany([{ name: "Taskin Ahmad", id: 15 }, { name: "Taskin Ahmad", id: 15 }, { name: "Taskin Ahmad", id: 15 }])


    // Find Data 
    
    // Find Data Singel
    db.PracticeData.findOne({ gender: "Female" })

    // Find Multiple Data
    db.PracticeData.find({ gender: "Male" })
}