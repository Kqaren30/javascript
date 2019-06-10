function isEven(n){
if (n%2===0)
return true
else
return false
}

function isOdd(n){
    return !isEven(n)
}

print(isEven(3))
print(isEven(2))
print(isOdd(3))
print(isOdd(2))
