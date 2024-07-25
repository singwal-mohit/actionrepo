const core = require('@actions/core');

async function run() {
  try {
    const input1 = core.getInput('input1');
    const input2 = core.getInput('input2');

    // Your action logic here
    const output1 = `Processed ${input1} and ${input2}`;

    core.setOutput('output1', output1);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
