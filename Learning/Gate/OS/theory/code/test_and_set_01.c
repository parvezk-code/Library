bool lock = false;

bool TestAndSet(bool &target)
{
    bool rv = target;
    target  = true;
    return(rv)
}
