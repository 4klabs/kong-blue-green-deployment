# Kong: Blue/Green deployment

## Architecture

```mermaid
graph LR
  kong((Kong Gateway))
  appBlue((App Blue))
  appGreen((App Green))
  appRed((App Red))

  kong --> |weight=50| appBlue
  kong --> |weight=30| appGreen
  kong --> |weight=20| appRed
```

## Setup

```sh
docker-compose up -d
```

## Output

```sh
# for ((i = 0; i < 30; i++)) { curl -Ss http://localhost:8000; echo "" }

{"msg":"Hello from red"}
{"msg":"Hello from blue"}
{"msg":"Hello from green"}
{"msg":"Hello from blue"}
{"msg":"Hello from blue"}
{"msg":"Hello from green"}
{"msg":"Hello from green"}
{"msg":"Hello from blue"}
{"msg":"Hello from red"}
{"msg":"Hello from blue"}
{"msg":"Hello from red"}
{"msg":"Hello from blue"}
{"msg":"Hello from green"}
{"msg":"Hello from blue"}
{"msg":"Hello from blue"}
{"msg":"Hello from green"}
{"msg":"Hello from green"}
{"msg":"Hello from blue"}
{"msg":"Hello from red"}
{"msg":"Hello from blue"}
{"msg":"Hello from red"}
{"msg":"Hello from blue"}
{"msg":"Hello from green"}
{"msg":"Hello from blue"}
{"msg":"Hello from blue"}
{"msg":"Hello from green"}
{"msg":"Hello from green"}
{"msg":"Hello from blue"}
{"msg":"Hello from red"}
{"msg":"Hello from blue"}
```
