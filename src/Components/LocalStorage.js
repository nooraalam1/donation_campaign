const getStoredDonations = ()=>{
    const storedDonations = localStorage.getItem('donations');
    if(storedDonations){
        return JSON.parse(storedDonations);
    }
    return [];
}

const saveDonations = (id)=>{
    const storedDonations = getStoredDonations();
    const exist = storedDonations.find(donationId=>donationId==id);
    if(!exist){
        storedDonations.push(id);
        localStorage.setItem("donations", JSON.stringify(storedDonations)); 
    }

}

export {getStoredDonations, saveDonations}