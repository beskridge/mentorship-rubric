/**
 * Javascript to display an interactive evaluation rubric for resumes and LinkedIn profiles.
 * Rubric was developed by Neal Bridges (https://www.youtube.com/c/CyberInsecurity).
 * 
 * @link ToDo
 * @author Brent Eskridge
 * @version 0.1
 * @copyright 2021 Brent Eskridge
 */

/* Data used to generate rubrics */
const rubricData = {
    "resumeCriteria": [
        {
            "id": "rc01",
            "name": "Experience",
            "description": "Experience written in a way that shows value brought to company; Don’t just put your job responsibilities.",
            "weight": 0.2,
            "ratingLevels": "default",
        },
        {
            "id": "rc02",
            "name": "No word soup",
            "description": "No word soup (skills vomit) - Core Competencies over Skills/Technical Knowledge.",
            "weight": 0.2,
            "ratingLevels": "default",
        },
        {
            "id": "rc03",
            "name": "Length",
            "description": "Length fits what is presented in the resume.",
            "weight": 0.2,
            "ratingLevels": "default",
        },
        {
            "id": "rc04",
            "name": "Relevant summary",
            "description": "If you add a summary, is it relevant. Elevator pitch to make someone think they want to hire you.",
            "weight": 0.2,
            "ratingLevels": "default",
        },
        {
            "id": "rc05",
            "name": "Bullet rules",
            "description": "3 rules when writing a bullet, what (what did you do), so what (what was the impact), now what (what happened after that).",
            "weight": 0.2,
            "ratingLevels": "resume-bullets",
        },
    ],
    "linkedInCriteria": [
        {
            "id": "lc01",
            "name": "Profile picture",
            "description": "The picture should be professional.",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc02",
            "name": "Banner",
            "description": "The banner should be professional and related to tech/cyber.",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc03",
            "name": "Social media links",
            "description": "The banner should include relevant social media links or, at the very least, meaninful text.",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc04",
            "name": "Content creator",
            "description": "Does the individual share knowledge and meaningfully interact with peer posts?  Should not just \"like\" everything.",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc05",
            "name": "Elevator pitch",
            "description": "Does the summary include an elevator pitch that describes what the person wants the viewer to remember about them.",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc06",
            "name": "Aspiring?",
            "description": "Does the person's description include \"aspiring\" or something simiar?  If so, that's \"bad.\"",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc07",
            "name": "Length",
            "description": "Short and sweet is not your friend.",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc08",
            "name": "Experience section",
            "description": "Has effort been put into the experience section?",
            "weight": 0.1,
            "ratingLevels": "default",
        },
        {
            "id": "lc09",
            "name": "Recommendations",
            "description": "Are there recommendations?",
            "weight": 0.1,
            "ratingLevels": "linkedin-recommendations",
        },
        {
            "id": "lc10",
            "name": "Education and certs",
            "description": "All the person's education and earned certifications are listed (no matter how big or small).",
            "weight": 0.1,
            "ratingLevels": "default",
        },
    ],
    "ratingLevels":
    {
        "default": [
            {
                "id": "rldef01",
                "label": "Superior",
                "weight": 1.0,
                "description": "ToDo - Superior description",
            },
            {
                "id": "rldef02",
                "label": "Good",
                "weight": 0.85,
                "description": "ToDo - Good description",
            },
            {
                "id": "rldef03",
                "label": "Average",
                "weight": 0.7,
                "description": "ToDo - Average description",
            },
            {
                "id": "rldef04",
                "label": "Poor",
                "weight": 0.55,
                "description": "ToDo - Poor description",
            },
            {
                "id": "rldef05",
                "label": "Unsatisfactory",
                "weight": 0.4,
                "description": "ToDo - Unsatisfactory description",
            },
            {
                "id": "rldef06",
                "label": "No credit",
                "weight": 0.0,
                "description": "ToDo - No credit description",
            },
        ],
        "resume-bullets": [
            {
                "id": "rlrb01",
                "label": "Three rules",
                "weight": 1.0,
                "description": "All three rules are generally followed",
            },
            {
                "id": "rlrb02",
                "label": "Two rules",
                "weight": 0.66,
                "description": "Only two rules are generally followed",
            },
            {
                "id": "rlrb03",
                "label": "One rule",
                "weight": 0.33,
                "description": "Only one rule is generally followed",
            },
            {
                "id": "rlrb04",
                "label": "None",
                "weight": 0.0,
                "description": "Either no bullet points or rules are not followed",
            },
        ],
        "linkedin-recommendations": [
            {
                "id": "rllr01",
                "label": "Meaningful",
                "weight": 1.0,
                "description": "Recommendations exist and are meaningful.",
            },
            {
                "id": "rllr02",
                "label": "Minimal",
                "weight": 0.5,
                "description": "Recommendation(s) exist, but they are either too few, or very short.",
            },
            {
                "id": "rlrb03",
                "label": "None",
                "weight": 0.0,
                "description": "No recommendations",
            },
        ],
    }
};


/* Functions */

window.onload = function()
{
    console.log( "Creating Resume rubric..." );
    createRubric( "resume" );
    console.log( "Creating LinkedIn rubric..." );
    createRubric( "linkedIn" );
};

function getRubricCriteria( rubricID )
{
    return rubricData[ rubricID + "Criteria" ];
}

function getRubricCriteriaWithId( rubricID, criteriaID )
{
    let allCriteria = getRubricCriteria( rubricID )
    let criteria = null;
    for( let tempCriteria of allCriteria )
    {
        if( criteriaID === tempCriteria.id )
        {
            criteria = tempCriteria;
            break;
        }
    }

    return criteria;
}

function getRubricRatingLevels( ratingLevelsID )
{
    return rubricData.ratingLevels[ ratingLevelsID ];
}

function buildCriteriaInfoElementID( rubricID, criteriaID )
{
    let criteriaInfoElement = "rubric-" + rubricID
        + "-critiria-" + criteriaID + "-info";

    return criteriaInfoElement;
}


function showHideElement( elementID )
{
    console.log( "showing/hiding element=[" + elementID + "]" );
    let e = document.getElementById( elementID );
    if( "block" !== e.style.display )
    {
        e.style.display = "block";
    }
    else
    {
        e.style.display = "none";
    }
}

function resetRubric( rubricID )
{
    /* Get all the criteria for this rubric */
    let allCriteria = getRubricCriteria( rubricID );
    for( let criteria of allCriteria )
    {
        /* Remove selected status for all the other buttons in the criteria */
        let ratingLevels = getRubricRatingLevels( criteria.ratingLevels );
        for( let ratingLevel of ratingLevels )
        {
            let tempButtonID = "rubric-" + rubricID + "-criteria-" + criteria.id + "-rating-level-"
                + ratingLevel.id;
            let tempButton = document.getElementById( tempButtonID );
            tempButton.classList.remove( "selected" );
        }

        /* Reset the criteria total */
        let criteriaTotalID = "rubric-" + rubricID + "-criteria-" + criteria.id + "-total";
        let totalElement = document.getElementById( criteriaTotalID );
        totalElement.textContent = 0;
    }

    /* Reset the rubric total */
    let rubricTotalID = "rubric-" + rubricID + "-total-value";
    let rubricTotalElement = document.getElementById( rubricTotalID );
    rubricTotalElement.textContent = 0;
}

function updateRubric( rubricID, criteriaID, ratingLevelID, ratingWeight )
{
    console.log( "Updating rubric: rubricID=[" + rubricID
        + "] criteriaID=[" + criteriaID + "] ratingLevelID=["
        + ratingLevelID + "] ratingWeight=[" + ratingWeight + "]" );

    /* Get the data */
    let allCriteria = getRubricCriteria( rubricID );
    let currentCriteria = getRubricCriteriaWithId( rubricID, criteriaID );
    let ratingLevels = getRubricRatingLevels( currentCriteria.ratingLevels );

    /* Remove selected status for all the other buttons in the criteria */
    for( let ratingLevel of ratingLevels )
    {
        let tempButtonID = "rubric-" + rubricID + "-criteria-" + criteriaID + "-rating-level-"
            + ratingLevel.id;
        let tempButton = document.getElementById( tempButtonID );
        tempButton.classList.remove( "selected" );
    }

    /* Build the button's id */
    let buttonID = "rubric-" + rubricID + "-criteria-" + criteriaID + "-rating-level-"
        + ratingLevelID;

    /* Change the background of the button */
    let ratingLevelButton = document.getElementById( buttonID );
    ratingLevelButton.classList.add( "selected" );

    /* Calculate the criteria total */
    let criteriaPoints = currentCriteria.weight * ratingWeight * 100;
    let criteriaTotalID = "rubric-" + rubricID + "-criteria-" + criteriaID + "-total";
    let totalElement = document.getElementById( criteriaTotalID );
    totalElement.textContent = Math.round( criteriaPoints );

    /* Re-calculate the total for the entire rubric */
    let totalPoints = 0;
    for( let tempCriteria of getRubricCriteria( rubricID ) )
    {
        let tempCriteriaTotalID = "rubric-" + rubricID + "-criteria-" + tempCriteria.id + "-total";
        let tempCriteriaTotalElement = document.getElementById( tempCriteriaTotalID );
        totalPoints += +tempCriteriaTotalElement.textContent;
    }

    let rubricTotalID = "rubric-" + rubricID + "-total-value";
    let rubricTotalElement = document.getElementById( rubricTotalID );
    rubricTotalElement.textContent = Math.round( totalPoints );
}

function createRubric( rubricID )
{
    /* Get the data */
    let rubricCriteria = getRubricCriteria( rubricID );

    /* Create the table */
    let rubricHTML = "<div class=\"rubric-table\" id=\"rubric-"
        + rubricID + "-table\">";

    /* Add a row for each criteria */
    for( let criteria of rubricCriteria )
    {
        /* Get the criteria ID */
        let criteriaID = criteria.id;

        /* Create a row for the criteria */
        rubricHTML += "<div class=\"rubric-criteria-row rubric-row-alternate\">";

        /* Add the name of the criteria */
        rubricHTML += "<div class=\"rubric-criteria-name\">" + criteria.name;
        let criteriaDescriptionID = "rubric-" + rubricID + "-criteria-" + criteria.id + "-description";
        rubricHTML += "<button class=\"rubric-criteria-description-show\" onclick=\"showHideElement(\'"
            + criteriaDescriptionID + "\')\"></button>"
        rubricHTML += "</div>";

        /* Add the rating levels */
        rubricHTML += "<div class=\"rubric-criteria-rating-container\">";
        rubricHTML += "<div class=\"rubric-criteria-rating-levels\">";
        let ratingLevels = getRubricRatingLevels( criteria.ratingLevels );
        for( let ratingLevel of ratingLevels )
        {
            let buttonID = "rubric-" + rubricID + "-criteria-" + criteriaID + "-rating-level-"
                + ratingLevel.id;
            rubricHTML += "<button class=\"rubric-criteria-rating-level\" id=\""
                + buttonID + "\" onclick=\"updateRubric(\'" + rubricID + "\', \'"
                + criteriaID + "\', \'" + ratingLevel.id + "\', \'"
                + ratingLevel.weight + "\')\">" + ratingLevel.label + "</button>";
        }
        rubricHTML += "</div>";

        /* Add the description container */
        rubricHTML += "<div class=\"rubric-criteria-description\" id=\""
            + criteriaDescriptionID + "\">";
        rubricHTML += criteria.description;

        /* Add the descriptions for each of the rating levels */
        rubricHTML += "<ul>"
        for( let ratingLevel of ratingLevels )
        {
            rubricHTML += "<li><span class=\"rubric-criteria-description-label\">"
                + ratingLevel.label + ":</span> <span class=\"rubric-criteria-description-text\">"
                + ratingLevel.description + "</span></li>";
        }
        rubricHTML += "</ul>"

        rubricHTML += "</div>";
        rubricHTML += "</div>";

        /* Add the criteria total */
        let criteriaTotalID = "rubric-" + rubricID + "-criteria-" + criteriaID + "-total";
        rubricHTML += "<div class=\"rubric-criteria-total\" id=\"" + criteriaTotalID + "\">0</div>";

        /* End the criteria row */
        rubricHTML += "</div>";
    }

    /* Add a row for the total */
    let rubricTotalID = "rubric-" + rubricID + "-total-value";
    rubricHTML += "<div class=\"rubric-total-row rubric-row-alternate\">";
    rubricHTML += "<div></div>";
    rubricHTML += "<div class=\"rubric-total-label\">Total:</div>";
    rubricHTML += "<div class=\"rubric-total-value\" id=\"" + rubricTotalID + "\">0</div>";
    rubricHTML += "</div>";   

    /* End the table */
    rubricHTML += "</div>";

    /* Add a button to reset the rubric */
    rubricHTML += "<button class=\"rubric-reset\" onclick=\"resetRubric(\'"
        + rubricID + "\')\">Reset</button>";

    /* Insert the rubric */
    let containerID = "rubric-" + rubricID.toLowerCase() + "-container";
    console.log( "Rubric containerID=[" + containerID + "]" );
    document.getElementById( containerID ).innerHTML = rubricHTML;
}



/* Copyright (C) 2021 Brent Eskridge - All Rights Reserved
 * You may use, distribute and modify this code under the
 * terms of the MIT license.
 *
 * You should have received a copy of the MIT license with
 * this file. If not, please write to: , or visit:
 * https://opensource.org/licenses/MIT
 */