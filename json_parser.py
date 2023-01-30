import json

f = open('./data/tricks.json')

allTricks = json.load(f)

for i in allTricks:
  newFileName = "./tricks/data/" + i["id"] + ".json"
  with open(newFileName, "w") as outfile:
    json.dump(i, outfile)
  
  outfile.close()

f.close()