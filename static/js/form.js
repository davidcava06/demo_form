Survey
    .StylesManager
    .applyTheme("default");

var json = {
    clearInvisibleValues: "onHidden",
    questions: [
        {
            type: "text",
            name: "post_code",
            title: "Enter current location",
            // placeHolder: "Enter Postcode",
            isRequired: true
        },
        {
            type: "text",
            name: "name",
            title: "Name",
            placeHolder: "Enter Name",
            visibleIf: "{post_code} notempty",
            isRequired: true
        },
        {
            type: "text",
            name: "last_name",
            title: "Last Name",
            placeHolder: "Enter Last Name",
            visibleIf: "{post_code} notempty",
            isRequired: true
        },
        {
            type: "radiogroup",
            name: "gender",
            title: "Gender",
            isRequired: true,
            choices: [
                "M", "F", "Other"
            ],
            visibleIf: "{post_code} notempty",
            colCount: 0
        }, 
        {
            type: "radiogroup",
            name: "ethnicity",
            title: "Ethnicity Group",
            isRequired: true,
            choices: [
                "National", "Non-National"
            ],
            visibleIf: "{post_code} notempty",
            colCount: 0
        }, 
        {
            type: "text",
            name: "age_group",
            title: "Age Group",
            placeHolder: "Enter age and hit Enter",
            visibleIf: "{post_code} notempty",
            isRequired: true
        },
        {
            type: "radiogroup",
            name: "prev_acc",
            title: "What was your previous accomodation like?",
            visibleIf: "{age_group}>=17 and {post_code} notempty" ,
            isRequired: true,
            choices: ["Friends/Family", "Prision", "Shelter", "Council flat"],
            colCount: 0
        },
        {
            type: "radiogroup",
            name: "prev_acc",
            title: "What was your previous accomodation like?",
            visibleIf: "{prev_acc} != 'Prision'",
            isRequired: true,
            choices: ["Private owned","Private rented","Friends/Family", "Prision", "Shelter", "Council flat"],
            colCount: 0
        }
    ]    
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});