while(TestAndSet(lock));
# critical section
lock = false
