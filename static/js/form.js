// Survey
//     .StylesManager
//     .applyTheme("default");

var json = {
    clearInvisibleValues: "onHidden",
    showProgressBar: "bottom",
    goNextPageAutomatic: true,
    pages:  [
        {
            questions: [
                {
                    type: "text",
                    name: "name",
                    title: "Name",
                    placeHolder: "Enter Name",
                    isRequired: true
                },
                {
                    type: "text",
                    name: "last_name",
                    title: "Last Name",
                    placeHolder: "Enter Last Name",
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
                    colCount: 0
                }, 
                {
                    type: "text",
                    name: "age_group",
                    title: "Age Group",
                    placeHolder: "Enter age",
                    isRequired: true
                }
            ]
        },
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "haveKids",
                    title: "Do you have a kid(s)?",
                    visibleIf: "{age}>=17",
                    isRequired: true,
                    choices: ["Yes", "No"],
                    colCount: 0
                }
            ]
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