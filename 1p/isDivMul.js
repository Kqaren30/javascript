function isDivisibleby(a,b){
if (a%b==0){
return true}
else
return false}

function isMultipleof(a,b){
return !isDivisibleby(a,b)}

print(isMultipleof(6,3));
print(isMultipleof(3,6));
print(isDivisibleby(6,3));
print(isDivisibleby(3,6));