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

    // Find Value by sort with assending and desinding
    db.BackendPractice.find({ age: { $lte: "50" } }).sort({ age: 1 }) //  for assending
    db.BackendPractice.find({ age: { $lte: "50" } }).sort({ age: -1 }) //  for desending

    // Fill Filtaring And  $in $nin
    db.BackendPractice.find({ age: { $in: [10, 20, 30] } }).sort({ age: 1 }) // Only Return Match With age 10 20 30
    db.BackendPractice.find({ age: { $nin: [10, 20, 30] } }).sort({ age: 1 }) // Only Return without  age 10 20 30
}
{
    // Problem Solving With Data base

    // 1. Find all documents in the collection where the age is greater than 30, and
    // only return the name and email fields. 
    db.PracticeBanckend.find({ age: { $gt: 30 } }, { name: 1 }).sort({ age: 1 }).project({ email: 1 })



    // 2. Find documents where the favorite color is either "Maroon" or "Blue."
    // Method 01 
    db.PracticeBanckend.find({
        $or: [
            {
                favoutiteColor: "Blue"
            },
            {
                favoutiteColor: "Maroon"
            },
        ]
    }).project({ favoutiteColor: 1 })

    // Method 02
    db.PracticeBanckend.find({ favoutiteColor: { $in: ["Blue", "Maroon"] } }).project({ favoutiteColor: 1 })


    // 3. Find all documents where the skill is an empty array. 
    db.PracticeBanckend.find({ skills: { $size: 0 } }).project({ skills: 1 })


    // 4. Find documents where the person has skills in both "JavaScript" and "Java."c  
    db.PracticeBanckend.find({ "skills.name": { $all: ["JAVASCRIPT", "JAVA"] } }).project({ "skills.name": 1 })

    db.PracticeBanckend.find(
        {
            skills:
            {
                $elemMatch: {
                    name: {
                        $in:
                            ["JAVASCRIPT", "JAVA"]
                    }
                }

            }

        }
    ).project({ "skills.name": 1 })


    //     5. Add a new skill to the skills array for the document with the email
    //     "amccurry3@cnet.com".The skill is
    //     {
    //         "name": "Python"
    //             ,
    //             "level": "Beginner"
    //                 ,
    //                 "isLearning": true
    //     }
    //     Note: At first, you will have to insert the given email then add the skill
    //     mentioned above

    db.PracticeBanckend.updateOne(
        {
            email: "amccurry3@cnet.com"
        },
        {
            $addToSet: {
                skills: {
                    $each: [{
                        "name": "Python"
                        ,
                        "level": "Beginner"
                        ,
                        "isLearning": true
                    }]
                }
            }
        }
    )

    // Aggrigation Framework
    // Match, Project
    db.PracticeBanckend.aggregate(
        { $match: { gender: "Male" } },
        { $addFields: { level: 2, subject: "CSE" } }
    )

}