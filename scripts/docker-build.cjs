// docker build --tag gpt/instruction:latest .

const { spawn } = require('node:child_process')
const dockerBuild = spawn('docker build --tag gpt/instruction:latest .')

dockerBuild.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`)
})

dockerBuild.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`)
})

dockerBuild.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})
