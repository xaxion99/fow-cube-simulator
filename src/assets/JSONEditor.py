import json
import os

filenameOld = 'Saga/msw.json'
filenameNew = 'Saga/msw_card_text.json'

with open(filenameNew, 'r+', encoding="utf8") as fNew:
    dataNew = json.load(fNew)
    array = []
    
    for i in range(108):
        #print(i, dataNew['card_details'][i]['card_text'], '\n')
        #print(i, dataNew['card_details'][i], '\n')
        array.append(dataNew['card_details'][i]['card_text'])

    print(array)
        

with open(filenameOld, 'r+', encoding="utf8") as fOld:
    dataOld = json.load(fOld)
    
    for i in range(108):
        #print(i, dataOld['card'][i]['name'], '\n')
        dataOld['card'][i]['text'].update(array[i])
        fOld.seek(0)
        json.dump(dataOld, fOld)

##os.remove(filename)
##with open(filename, 'w') as f:
##    json.dump(data, f, indent=4)
