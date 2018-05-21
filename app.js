console.log('Mathew Cook'.toUpperCase());
console.log('Career: Web Developer');
console.log('When I\'m not coding, I enjoy the outdoors');
console.log('My Interests: \n Fishing \n Hunting \n Camping \n Cars');
function displayPosition(companyName, jobTitle, description){
    console.log(`*Company Name: ${companyName}\n Job Title: ${jobTitle}\n Job Description: ${description}`)
}
displayPosition('Goodin Company', 'Applications Admin', 'Maintain user profiles');
displayPosition('Goodin Company', 'Warehousemen','Shipping, Receiving, Customer Service');
displayPosition('Home Depot', 'Garden Associate', 'Customer service');

function displaySkill(skillName, isTrue){
    
    if (isTrue === true){
        console.log(`BAM: ${skillName}`);
    }else {
        console.log(`${skillName}`);
    }
}
console.log('My Skills:')
displaySkill('HTML', false);
displaySkill('CSS', false);
displaySkill('Javascript', true);
displaySkill('React', true);
displaySkill('Bootstrap', true);
displaySkill('MongoDB', true);