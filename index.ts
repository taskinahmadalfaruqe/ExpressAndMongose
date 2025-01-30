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

    // Find Value With Operators $EQ
    db.Practicebackend.findOne({ gender: { $eq: "Female" } })
    db.PracticeData.find({ gender: { $eq: "Male" } })

    // Find Value With Operators $LEQ
    db.Practicebackend.findOne({ age: { $lte: 12 } })
    db.PracticeData.find({ age: { $gt: 55 } })

}