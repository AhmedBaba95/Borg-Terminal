import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      // Process the command
      processCommand(input);

      // Clear the input
      setInput("");
    }
  };

  const processCommand = (command) => {
    // Check if the input is a comment
    if (command.trim().startsWith("#")) {
      // Treat it as a comment and display the text
      setOutput((prevOutput) => [
        ...prevOutput,
        { type: "comment", text: command },
      ]);
    } else {
      // Process other specific commands
      const commandHandlers = {
        "borg help": handleHelpCommand,
        "borg serve": handleServeCommand,
        "borg init": handleInitCommand,
        "borg check": handleCheckCommand,
        "borg key": handleKeyCommand,
        "borg change-passphrase": handleChangePassphraseCommand,
        "borg create": handleCreateCommand,
        "borg extract": handleExtractCommand,
        "borg export-tar": handleExportTarCommand,
        "borg diff": handleDiffCommand,
        "borg rename": handleRenameCommand,
        "borg delete": handleDeleteCommand,
        "borg list": handleListCommand,
        "borg mount": handleMountCommand,
        "borg umount": handleUmountCommand,
        "borg info": handleInfoCommand,
        "borg break-lock": handleBreakLockCommand,
        "borg prune": handlePruneCommand,
        "borg upgrade": handleUpgradeCommand,
        "borg recreate": handleRecreateCommand,
        "borg with-lock": handleWithLockCommand,
        "borg debug": handleDebugCommand,
        "borg benchmark": handleBenchmarkCommand,
      };

      const commandHandler = commandHandlers[command];

      if (commandHandler) {
        // Call the corresponding handler function for the command
        commandHandler(command);
      } else {
        setOutput((prevOutput) => [
          ...prevOutput,
          { type: "input", text: `$ ${command}` },
          { type: "output", text: "Command not recognized: " + command },
        ]);
      }
    }
  };

  // Handler functions for each specific command
  const handleServeCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Starting repository server process..." },
    ]);
  };

  const handleInitCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Initializing empty repository..." },
    ]);
  };

  const handleCheckCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Verifying repository..." },
    ]);
  };

  const handleKeyCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Managing repository key..." },
    ]);
  };

  const handleChangePassphraseCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Changing repository passphrase..." },
    ]);
  };

  const handleCreateCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Creating backup..." },
    ]);
  };

  const handleExtractCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Extracting archive contents..." },
    ]);
  };

  const handleExportTarCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Creating tarball from archive..." },
    ]);
  };

  const handleDiffCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Finding differences in archive contents..." },
    ]);
  };

  const handleRenameCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Renaming archive..." },
    ]);
  };

  const handleDeleteCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Deleting archive..." },
    ]);
  };

  const handleListCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Listing archive or repository contents..." },
    ]);
  };

  const handleMountCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Mounting repository..." },
    ]);
  };

  const handleUmountCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Unmounting repository..." },
    ]);
  };

  const handleInfoCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Showing repository or archive information..." },
    ]);
  };

  const handleBreakLockCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Breaking repository and cache locks..." },
    ]);
  };

  const handlePruneCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Pruning archives..." },
    ]);
  };

  const handleUpgradeCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Upgrading repository format..." },
    ]);
  };

  const handleRecreateCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Re-creating archives..." },
    ]);
  };

  const handleWithLockCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Running user command with lock held..." },
    ]);
  };

  const handleDebugCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      {
        type: "output",
        text: "Debugging command (not intended for normal use)...",
      },
    ]);
  };

  const handleBenchmarkCommand = (command) => {
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "input", text: `$ ${command}` },
      { type: "output", text: "Running benchmark command..." },
    ]);
  };

  const getBorgHelpOutput = () => {
    return [
      "required arguments:",
      "<command>",
      "serve  :               start repository server process                      ",
      "init  :                initialize an empty repository                          ",
      "check  :               verify repository                                     ",
      "key  :                 manage repository key                                 ",
      "change-passphrase  :   change repository passphrase                          ",
      "create  :              create backup                                          ",
      "extract  :             extract archive contents                              ",
      "export-tar  :          create tarball from archive                           ",
      "diff  :                find differences in archive contents                  ",
      "rename  :              rename archive                                        ",
      "delete  :              delete archive                                        ",
      "list  :                list archive or repository contents                   ",
      "mount  :               mount repository                                      ",
      "umount  :              unmount repository                                     ",
      "info  :                show repository or archive information                ",
      "break-lock  :          break repository and cache locks                      ",
      "prune  :               prune archives                                        ",
      "upgrade  :             upgrade repository format                             ",
      "recreate  :            re-create archives                                    ",
      "with-lock  :           run user command with lock held                       ",
      "debug  :               debugging command (not intended for normal use)       ",
      "benchmark:           benchmark command                                      ",
    ];
  };

  const handleHelpCommand = (command) => {
    const helpOutput = getBorgHelpOutput();

    const newOutput = [
      { type: "input", text: `$ ${command}` },
      ...helpOutput.map((line) => ({ type: "output", text: line })),
    ];

    setOutput((prevOutput) => [...prevOutput, ...newOutput]);
  };

  // Display previous output
  return (
    <div className="App w-[70vw] h-[80vh] mt-[10vh] bg-slate-950 p-4 overflow-auto">
      {output.map((item, index) => (
        <div
          key={index}
          className={
            item.type === "comment" ? "text-gray-500 mb-2" : "text-white mb-2"
          }
        >
          {item.type === "comment" && <span>$ </span>}
          {item.text}
        </div>
      ))}

      {/* Input area */}
      <div className="text-white">
        <span>$ </span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none text-white"
        />
      </div>
    </div>
  );
}

export default App;
