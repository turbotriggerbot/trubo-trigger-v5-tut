import json

def transform_data(old_data):
    new_data = {}
    for key, value in old_data.items():
        new_entry = {
            "triggerbot": {
                "auth": {
                    "key": value.get("key"),
                    "uuid": value.get("uuid"),
                    "username": value.get("username")
                },
                "plan": {
                    "type": value.get("type"),
                    "creation": value.get("creation"),
                    "expiration": value.get("expiration"),
                    "expired": value.get("expired")
                }
            }
        }
        new_data[key] = new_entry
    return new_data

def main():
    # Load JSON data with utf-8 encoding
    with open('data.json', 'r', encoding='utf-8') as file:
        old_data = json.load(file)
    
    # Transform data
    new_data = transform_data(old_data)
    
    # Overwrite input file with new JSON data
    with open('data.json', 'w', encoding='utf-8') as file:
        json.dump(new_data, file, indent=4)

if __name__ == "__main__":
    main()
