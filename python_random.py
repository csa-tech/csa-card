import random

fo = open("foo.txt", "w")

resultList = random.sample(range(9999999,100000000),20)

for i in range(20):
    fo.write('{\"_id\":\"')
    fo.write(str(resultList[i]))
    fo.write('\",\"card_number\":\"')
    fo.write(str(resultList[i]))
    fo.write('\",\"activated\":false}')
    fo.write('\n')
	
fo.close()