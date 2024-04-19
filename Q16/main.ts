// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner

let guests: String[] = ["Albert Einstein", "Marie Curie", "Leonarade da Vinci"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests

guests.unshift("Issac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});