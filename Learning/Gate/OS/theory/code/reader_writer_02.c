// Many Readers
P(mutex)
    readCount = readCount + 1
    if( readCount == 1){
        P(wrt)
    }
V(mutex)

# perform reading

P(mutex)
    readCount = readCount - 1
    if( readCount == 0){
        V(wrt)
    }
V(mutex)



