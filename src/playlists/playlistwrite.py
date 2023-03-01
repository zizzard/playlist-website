
for num in range(22):
    num = num + 1
    name = "0"
    if num < 10:
        name = "00" + str(num)
    else:
        name = "0" + str(num)

    file_name = name + ".json"
    file_name_new = name + ".js"
    
    with open(file_name,'r') as contents:
        save = contents.read()
    with open(file_name_new,'w') as contents:
        text_to_write = "let d" + name + " = "
        contents.write(text_to_write)
    with open(file_name_new,'a') as contents:
        contents.write(save)
    with open(file_name_new,'a') as contents:
        text_to_write = ";\nexport default d" + name
        contents.write(text_to_write)
