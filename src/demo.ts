interface Contact{
  id: number;
  name:ContactName;
  birthDate? : Date;
  status? : ContactStatus
}

enum ContactStatus{
  Active = "Active", 
  Inactive = "Inactive", 
  New = "New"
}


let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "Wardell Curry",
  status: ContactStatus.Active


}

type ContactName = string ;

function clone<T>(source: T): T{
  return Object.apply({}, source);
}

const a: Contact = {id:123, name: "Home Simpson"};
const b = clone(a);

const dateRange = {startDate: Date.now(), endDate: Date.now()};
const dateRangeCopy = clone(dateRange);