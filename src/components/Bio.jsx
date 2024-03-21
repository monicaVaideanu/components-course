const Bio = (props) => {
    let hobbiesList = props.hobbies;//[props.hobbies]; de ce asa imi dadea false mereu?

    let programmer = "FALSE";
    const hobbiesString = hobbiesList ? hobbiesList.join(', ') : ' ';

    if (hobbiesList.includes("Java") || hobbiesList.includes("React")) {
        programmer = "TRUE"; 
    }

    return (
        <div>
             <h5>BirthDate: {props.dateOfBirth}</h5>
             <h5>Description: {props.description}</h5>
             <h5>Hobbies: {hobbiesString}</h5>
            <h5>Programmer: {programmer}</h5>
        </div>
    );
    };

 export default Bio;