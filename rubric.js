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
            "name": "Relevant summary",
            "description": "If you add a summary, ensure it is relevant to the position to which you are applying (this means custimze your resume to each applied position). Elevator pitch to make someone think they want to hire you.",
            "weight": 0.1,
            "ratingLevels": "resume-summary",
        },
        {
            "id": "rc02",
            "name": "No word soup",
            "description": "Resume should not contain 'word soup' (skills vomit).  Instead skills and technical knowledge should be shown/demonstrated in the experience narrative.  If a list of items is provided, it should be comprised of core competencies that are expounded upon in narrative.",
            "weight": 0.1,
            "ratingLevels": "resume-word-soup",
        },
        {
            "id": "rc03",
            "name": "Experience",
            "description": "Experience section written in a way that shows value brought to the organization. Don’t just put your job responsibilities.  Be specific.",
            "weight": 0.3,
            "ratingLevels": "resume-experience",
        },
        {
            "id": "rc04",
            "name": "Bullet rules",
            "description": "3 rules when writing a bullet points as part of the experience narrative are to include: 'What?' (what did you do), 'So what?' (what was the impact), 'Now what?' (what happened after that).  Most succeed with adding the first.  Some do well and add the second.  Most fail by ignoring the third.  Each bullet point should include a metric to quantify the 'So what?' portion.",
            "weight": 0.3,
            "ratingLevels": "resume-bullets",
        },
        {
            "id": "rc05",
            "name": "Length",
            "description": "Length fits what is presented in the resume.",
            "weight": 0.2,
            "ratingLevels": "resume-length",
        },
    ],
    "linkedInCriteria": [
        {
            "id": "lc01",
            "name": "Profile picture",
            "description": "The profile picture should be professional.  This doesn't mean that it needs to be taken by a professional photographer.  A professional profile picture is essential in building your brand and enables you to effectively network.",
            "weight": 0.1,
            "ratingLevels": "linkedin-picture",
        },
        {
            "id": "lc02",
            "name": "Banner",
            "description": "The banner should be professional and related to tech/cyber.",
            "weight": 0.05,
            "ratingLevels": "linkedin-banner",
        },
        {
            "id": "lc03",
            "name": "Social media links",
            "description": "The banner should include relevant social media links or, at the very least, meaninful text.",
            "weight": 0.05,
            "ratingLevels": "linkedin-social",
        },
        {
            "id": "lc04",
            "name": "Content creator",
            "description": "Does the individual share knowledge and meaningfully interact with peer posts?  Should not just \"like\" everything.",
            "weight": 0.1,
            "ratingLevels": "linkedin-creator",
        },
        {
            "id": "lc05",
            "name": "Elevator pitch",
            "description": "Does the summary include an elevator pitch that describes what the person wants the viewer to remember about them.",
            "weight": 0.1,
            "ratingLevels": "linkedin-pitch",
        },
        {
            "id": "lc06",
            "name": "Aspiring?",
            "description": "Does the person's description include \"aspiring\" or something simiar such as 'passionate'?  If so, that's \"bad.\"",
            "weight": 0.05,
            "ratingLevels": "linkedin-aspiring",
        },
        {
            "id": "lc07",
            "name": "Length",
            "description": "Short and sweet is not your friend.",
            "weight": 0.1,
            "ratingLevels": "linkedin-length",
        },
        {
            "id": "lc08",
            "name": "Experience section",
            "description": "Has effort been put into the experience section?",
            "weight": 0.25,
            "ratingLevels": "linkedin-experience",
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
            "ratingLevels": "linkedin-education",
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
                "rank": 4,
            },
            {
                "id": "rldef02",
                "label": "Good",
                "weight": 0.85,
                "description": "ToDo - Good description",
                "rank": 4,
            },
            {
                "id": "rldef03",
                "label": "Average",
                "weight": 0.7,
                "description": "ToDo - Average description",
                "rank": 3,
            },
            {
                "id": "rldef04",
                "label": "Poor",
                "weight": 0.55,
                "description": "ToDo - Poor description",
                "rank": 2,
            },
            {
                "id": "rldef05",
                "label": "Unsatisfactory",
                "weight": 0.4,
                "description": "ToDo - Unsatisfactory description",
                "rank": 1,
            },
            {
                "id": "rldef06",
                "label": "No credit",
                "weight": 0.0,
                "description": "ToDo - No credit description",
                "rank": 0,
            },
        ],
        "resume-bullets": [
            {
                "id": "rlrb01",
                "label": "Three rules",
                "weight": 1.0,
                "description": "All three rules are generally followed for each bullet point associated with a position/experience.",
                "rank": 4,
            },
            {
                "id": "rlrb02",
                "label": "Two rules",
                "weight": 0.66,
                "description": "Only two rules are generally followedfor each bullet point associated with a position/experience.",
                "rank": 3,
            },
            {
                "id": "rlrb03",
                "label": "One rule",
                "weight": 0.33,
                "description": "Only one rule is generally followedfor each bullet point associated with a position/experience.",
                "rank": 1,
            },
            {
                "id": "rlrb04",
                "label": "None",
                "weight": 0.0,
                "description": "Either no bullet points or rules are not followed at all.",
                "rank": 0,
            },
        ],
        "resume-length": [
            {
                "id": "rlrl01",
                "label": "Just right",
                "weight": 1.0,
                "description": "Resume length is just right.",
                "rank": 4,
            },
            {
                "id": "rlrl02",
                "label": "Little (long|short)",
                "weight": 0.8,
                "description": "Resume length is either a little too long or too short.",
                "rank": 3,
            },
            {
                "id": "rlrl03",
                "label": "Very (long|short)",
                "weight": 0.5,
                "description": "Resume length is either too long or too short.",
                "rank": 1,
            },
            {
                "id": "rlrl04",
                "label": "No credit",
                "weight": 0.0,
                "description": "Resume length is either far too long, making it too long to be comprehensible, or far too short, making it lacking any useful content.",
                "rank": 0,
            },
        ],
        "resume-word-soup": [
            {
                "id": "rlws01",
                "label": "Best",
                "weight": 1.0,
                "description": "All kills are shown/demonstrated in experience narrative and are specific.  Any skills or personality traits listed at the top are not a word soup.",
                "rank": 4,
            },
            {
                "id": "rlws02",
                "label": "Better",
                "weight": 0.85,
                "description": "A good number of skills are shown/demonstrated in experience narrative and are specific.  Any skills or personality traits listed at the top are mostly not a word soup.",
                "rank": 3,
            },
            {
                "id": "rlws03",
                "label": "Good",
                "weight": 0.7,
                "description": "Some skills are shown/demonstrated in experience narrative and are specific.  Any skills or personality traits listed at the top are \"word soupy,\" but not too much.",
                "rank": 2,
            },
            {
                "id": "rlws04",
                "label": "Poor",
                "weight": 0.5,
                "description": "Either some word soup is present or skills are vaguely shown/demonstrated in experience narrative.  Any skills or personality traits listed at the top are very \"word soupy.\"",
                "rank": 1,
            },
            {
                "id": "rlrl05",
                "label": "Epic fail",
                "weight": 0.0,
                "description": "\"At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points, and may God have mercy on your soul.\"",
                "rank": 0,
            },
        ],
        "resume-experience": [
            {
                "id": "rlex01",
                "label": "Best",
                "weight": 1.0,
                "description": "Experience narrative describes how you brought value to the organization for each role/position.  Each example is specific and illustrates skills that can be applied to the role to which you are applying.",
                "rank": 4,
            },
            {
                "id": "rlex02",
                "label": "Better",
                "weight": 0.85,
                "description": "Experience narrative describes how you brought value to the organization for most roles/positions.  Almost every example is specific and illustrates skills that can be applied to the role to which you are applying.",
                "rank": 3,
            },
            {
                "id": "rlex03",
                "label": "Good",
                "weight": 0.7,
                "description": "Experience narrative describes how you brought value to the organization for some roles/positions.  A good number of examples are specific and illustrate skills that can be applied to the role to which you are applying.",
                "rank": 2,
            },
            {
                "id": "rlex04",
                "label": "Poor",
                "weight": 0.5,
                "description": "Experience narrative is generally a list of responsibilities and doesn't provide much information regarding how you brought value to the organization.  Any examples provided are either not specific or or not tailored.",
                "rank": 1,
            },
            {
                "id": "rlex05",
                "label": "Epic fail",
                "weight": 0.0,
                "description": "\"At no point in your rambling, incoherent response were you even close to anything that could be considered a rational thought. Everyone in this room is now dumber for having listened to it. I award you no points, and may God have mercy on your soul.\"",
                "rank": 0,
            },
        ],
        "resume-summary": [
            {
                "id": "rlex01",
                "label": "Best",
                "weight": 1.0,
                "description": "If a summary exists, it is relevant to the potential position and provides excellent information, without being too long.  If no summary exists, the resume provides excellent content that constitutes an \"elevator pitch.\"",
                "rank": 4,
            },
            {
                "id": "rlex02",
                "label": "Better",
                "weight": 0.85,
                "description": "If a summary exists, it is mostly relevant to the potential position and provides good information, without being too long.  If no summary exists, the resume mostly provides sufficient content that constitutes an \"elevator pitch.\"",
                "rank": 3,
            },
            {
                "id": "rlex03",
                "label": "Good",
                "weight": 0.7,
                "description": "If a summary exists, it is somewhat relevant to the potential position and provides some good information.  The summary may be too long or short to be an effectively serve the intented purpose.  If no summary exists, the resume provides some content that constitutes an \"elevator pitch.\"",
                "rank": 2,
            },
            {
                "id": "rlex04",
                "label": "Poor",
                "weight": 0.5,
                "description": "If a summary exists, it isn't relevant to the potential position and may ramble, providing little value.  If no summary exists, the resume itself provides little to no content that constitutes an \"elevator pitch.\"",
                "rank": 1,
            },
            {
                "id": "rlex05",
                "label": "No credit",
                "weight": 0.0,
                "description": "If a summary exists, it rambles and provides no value to the resume.  If no summary exists, the resume itself provides no content that could be considered an \"elevator pitch.\"",
                "rank": 0,
            },
        ],
        "linkedin-picture": [
            {
                "id": "rllp01",
                "label": "Best",
                "weight": 1.0,
                "description": "A profile picture exists and is professional.",
                "rank": 4,
            },
            {
                "id": "rllp02",
                "label": "Better",
                "weight": 0.75,
                "description": "A profile picture exists and is somewhat professional.",
                "rank": 2,
            },
            {
                "id": "rllp03",
                "label": "Good",
                "weight": 0.5,
                "description": "A profile picture exists, but isn't professional.",
                "rank": 1,
            },
            {
                "id": "rllp04",
                "label": "No credit",
                "weight": 0.0,
                "description": "Either a profile picture exists and isn't professional, or no profile picture exists.",
                "rank": 0,
            },
        ],
        "linkedin-banner": [
            {
                "id": "rllb01",
                "label": "Best",
                "weight": 1.0,
                "description": "A banner exists and is both professional and related to cyber or tech.",
                "rank": 4,
            },
            {
                "id": "rllb02",
                "label": "Better",
                "weight": 0.75,
                "description": "A banner exists and is either professional or related to cyber or tech, but not both.",
                "rank": 2,
            },
            {
                "id": "rllb03",
                "label": "Good",
                "weight": 0.5,
                "description": "A banner exists and is either somewhat professional or somewhat related to cyber or tech, but not both.",
                "rank": 1,
            },
            {
                "id": "rllb04",
                "label": "No credit",
                "weight": 0.0,
                "description": "Either, no banner exists or it exists, but isn't professional or related to cyber or tech.",
                "rank": 0,
            },
        ],
        "linkedin-social": [
            {
                "id": "rllr01",
                "label": "Best",
                "weight": 1.0,
                "description": "Banner either includes relevant social media links or very meaningful text.",
                "rank": 4,
            },
            {
                "id": "rllr02",
                "label": "Good",
                "weight": 0.7,
                "description": "Banner either includes minimal social media links or somewhat meaningful text.",
                "rank": 2,
            },
            {
                "id": "rllr03",
                "label": "None",
                "weight": 0.0,
                "description": "Banner doesn't include either relevant social media links or meaningful text.",
                "rank": 0,
            },
        ],
        "linkedin-creator": [
            {
                "id": "rllc01",
                "label": "Best",
                "weight": 1.0,
                "description": "Individual shares knowledge and meaningfully interacts with peer posts on a consistent basis.  Posts are generally thought provoking.",
                "rank": 4,
            },
            {
                "id": "rllc02",
                "label": "Better",
                "weight": 0.85,
                "description": "Individual shares knowledge and meaningfully interacts with peer posts on a somewhat consistent basis.  Post are not generally thought provoking, though.",
                "rank": 3,
            },
            {
                "id": "rllc03",
                "label": "Good",
                "weight": 0.7,
                "description": "Individual shares knowledge and meaningfully interacts with peer posts on an infrequent basis.",
                "rank": 2,
            },
            {
                "id": "rllc04",
                "label": "Poor",
                "weight": 0.5,
                "description": "Individual sometimes shares knowledge and meaningfully interacts with peer posts, but mostly \"like\"s everything.",
                "rank": 1,
            },
            {
                "id": "rllc05",
                "label": "No credit",
                "weight": 0.0,
                "description": "Individual doesn't interact with peers in any meaningful way.",
                "rank": 0,
            },
        ],
        "linkedin-pitch": [
            {
                "id": "rllp01",
                "label": "Best",
                "weight": 1.0,
                "description": "All content is includied in the resume or experience section.  It demosntrates pride in accomplishments without being over the top.  It includes a call to action and punch.",
                "rank": 4,
            },
            {
                "id": "rllp02",
                "label": "Better",
                "weight": 0.85,
                "description": "Vast majority content is includied in the resume or experience section.  It demosntrates pride in accomplishments, but may be a bit over the top.  It includes a call to action or punch, but not both.",
                "rank": 3,
            },
            {
                "id": "rllp03",
                "label": "Good",
                "weight": 0.7,
                "description": "Most of the content is included int eh resume or experience seciont.  It demonstrates some pride, but lacks punch",
                "rank": 2,
            },
            {
                "id": "rllp04",
                "label": "Poor",
                "weight": 0.5,
                "description": "Some of the content is included in the resume or experience section.  It doesn't demosntrate bride and lacks a call to action and punch.",
                "rank": 1,
            },
            {
                "id": "rllp05",
                "label": "No credit",
                "weight": 0.0,
                "description": "You had one job...  Pitch provides no value and/or contains content that isn't supported with any evidence elsewhere.",
                "rank": 0,
            },
        ],
        "linkedin-aspiring": [
            {
                "id": "rlla01",
                "label": "Excelsior!",
                "weight": 1.0,
                "description": "Description doesn't include \"aspiring\" or anything similar such as \"passionate.\"",
                "rank": 4,
            },
            {
                "id": "rlla02",
                "label": "Epic fail",
                "weight": 0.0,
                "description": "You had one job...  Description includes \"aspiring\" or something similar such as \"passionate.\"",
                "rank": 0,
            },
        ],
        "linkedin-length": [
            {
                "id": "rlll01",
                "label": "Best",
                "weight": 1.0,
                "description": "The about section is \"above the fold\" and pops out.  It includes the appropriate amount of information to communicate the value the individual brings to organizations without being too long.",
                "rank": 4,
            },
            {
                "id": "rlll02",
                "label": "Better",
                "weight": 0.85,
                "description": "The about section includes the appropriate amount of information to communicate the value the individual brings to organizations, but it is either a bit too long, a bit too short, or doesn't have enough pop.",
                "rank": 3,
            },
            {
                "id": "rlll03",
                "label": "Good",
                "weight": 0.7,
                "description": "The about section mostly includes the appropriate amount of information to communicate the value the individual brings to organizations, but it is either a too long, too short, or doesn't pop out.",
                "rank": 2,
            },
            {
                "id": "rlll04",
                "label": "Poor",
                "weight": 0.5,
                "description": "The about section contains little information that is appropriate and is either way too long or way too short.",
                "rank": 1,
            },
            {
                "id": "rlll05",
                "label": "No credit",
                "weight": 0.0,
                "description": "The about section either doesn't exist or exists but contains no meaningful information.",
                "rank": 0,
            },
        ],
        "linkedin-experience": [
            {
                "id": "rlll01",
                "label": "Best",
                "weight": 1.0,
                "description": "Each role listed contains excellent information that illustrates the value the individual brought to the organization and answers the questions \"What?\", \"So what?\", and \"Now what?\".  Each item consistently has approximately the same level of detail.  Either roles generally have more information than the same role in the resume or more roles are listed.",
                "rank": 4,
            },
            {
                "id": "rlll02",
                "label": "Better",
                "weight": 0.85,
                "description": "The majority of roles listed contain excellent information that illustrates the value the individual brought to the organization and answer the questions \"What?\", \"So what?\", and \"Now what?\".  Most items consistently have approximately the same level of detail.",
                "rank": 3,
            },
            {
                "id": "rlll03",
                "label": "Good",
                "weight": 0.7,
                "description": "Roles listed generally contain information that illustrates the value the individual brought to the organization and answer the questions \"What?\", \"So what?\", and \"Now what?\".  The amount of detail for each item varies.",
                "rank": 2,
            },
            {
                "id": "rlll04",
                "label": "Poor",
                "weight": 0.5,
                "description": "Roles listed rarely contain information that illustrates the value the individual brought to the organization and answer the questions \"What?\", \"So what?\", and \"Now what?\".  The amount of detail for each item varies wildly.",
                "rank": 1,
            },
            {
                "id": "rlll05",
                "label": "No credit",
                "weight": 0.0,
                "description": "Roles listed contain no meaningful information that illustrates the value the individual brought to the organization and answer the questions \"What?\", \"So what?\", and \"Now what?\".  Most likely, the information is simply a listing of role responsibilities.  There is no consistency in the amount of detail for easch item, if details even exist.",
                "rank": 0,
            },
        ],
        "linkedin-recommendations": [
            {
                "id": "rllr01",
                "label": "Meaningful",
                "weight": 1.0,
                "description": "Recommendations exist and are meaningful.",
                "rank": 4,
            },
            {
                "id": "rllr02",
                "label": "Minimal",
                "weight": 0.5,
                "description": "Recommendation(s) exist, but they are either too few, or very short.",
                "rank": 2,
            },
            {
                "id": "rllr03",
                "label": "None",
                "weight": 0.0,
                "description": "No recommendations",
                "rank": 0,
            },
        ],
        "linkedin-education": [
            {
                "id": "rlle01",
                "label": "Best",
                "weight": 1.0,
                "description": "The education and certification sections contain a great deal of content.  In addition to official certificaitons, the certification section includes numerous unofficial certifications such as a TryHackMe rank and completed trainings.",
                "rank": 4,
            },
            {
                "id": "rlle02",
                "label": "Better",
                "weight": 0.85,
                "description": "The education and certification sections contain a good amount of content, but could use more.  In addition to official certificaitons, the certification section includes some unofficial certifications such as a TryHackMe rank and completed trainings, but could use more.",
                "rank": 3,
            },
            {
                "id": "rlle03",
                "label": "Good",
                "weight": 0.7,
                "description": "The education and certification sections contain adequate content, but should have more.  The certification section includes little to no unofficial certifications such as a TryHackMe rank or completed trainings.",
                "rank": 2,
            },
            {
                "id": "rlle04",
                "label": "Poor",
                "weight": 0.5,
                "description": "The education and certification sections contain the bare minimum of content with no additional information.",
                "rank": 1,
            },
            {
                "id": "rlle05",
                "label": "No credit",
                "weight": 0.0,
                "description": "The education and certification sections contain little to no information.",
                "rank": 0,
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
            ratingLevelRank = "rating-level-rank-" + ratingLevel.rank;
            rubricHTML += "<button class=\"rubric-criteria-rating-level "
                + ratingLevelRank + "\" id=\""
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
        rubricHTML += "<ul class=\"rubric-criteria-description-list\">"
        for( let ratingLevel of ratingLevels )
        {
            rubricHTML += "<li class=\"rubric-criteria-description-item\"><span class=\"rubric-criteria-description-label\">"
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