// //imports needed for this function
// const axios = require('axios');
// const FormData = require('form-data');

const pinataApiKey = '';
const pinataSecretApiKey = '';

let socket;

$(function() {
  // expose our socket client
  socket = io();

  // handle and submit new chat messages to our server
  $("form").submit(function(e) {
    e.preventDefault(); // prevents page reloading
    const msg = $("#m").val();
    socket.emit("chat message", $("#m").val());
    $("#m").val("");
    return false;
  });

  // listen for new chat messages from our server
  // these are all sent over the Hedera consensus service!
  socket.on("chat message", function(msg) {

    const jsonMsg = JSON.parse(msg);
    // Grab the specifically formatted message string
    const operatorId = jsonMsg.operatorAccount;
    const clientId = jsonMsg.client;
    const theMessage = jsonMsg.message;
    const sequenceNumber = jsonMsg.sequence;
    const trimmedHash = "runningHash: " + jsonMsg.runningHash.slice(0,6) + "..";
    const trimmedTimestamp = jsonMsg.timestamp.slice(0,25);

    // Grab & trim our topic ID
    const topicId = document.getElementById("topic-id");
    const idString = topicId.innerHTML.substring(7, topicId.length);

    // Append the message to our HTML in pieces
    $("#messages").append(
      $("<li>").addClass("new-message").append(
        $("<div>").addClass("message").append(
          $("<p>").text(operatorId+"@"+clientId).addClass("client")).append(
            $("<div>").addClass("message-body").append(
              $("<div>").text(theMessage).addClass("message-content")).append(
              $("<div>").text(trimmedTimestamp).addClass("message-timestamp")))).append(
        $("<div>").addClass("meta").append(
          $("<p>").text("sequence: "+ sequenceNumber).addClass("details")).append(
          $("<p>").text(trimmedHash).addClass("details")).append(
          $("<a>").text("view transaction").addClass("details")
            .attr("target", "_blank")
            .attr("href", `https://explorer.kabuto.sh/testnet/topic/${idString}/message/${sequenceNumber}`))));

    // Update the current sequence #
    $("#sequence-number").text("last message sequence number: " + sequenceNumber + "  ");
  });

  // listen for new client connections from our server
  socket.on("connect message", function(msg) {
    /* send new connection message */
    const connectMessage = JSON.parse(msg)
    $("#messages").append(
      $("<li>").text('new connection: ' + connectMessage.operatorAccount + "@" + connectMessage.client).addClass("new-connection"));
    /* update this clients topic id */
    const topicId = document.getElementById("topic-id");
    topicId.innerHTML = "Topic: " + connectMessage.topicId;
  });

  // listen for client disconnections from our server
  socket.on("disconnect message", function(msg) {
    /* send new disconnection message */
    const disconnectMsg = JSON.parse(msg);
    $("#messages").append(
      $("<li>").text(disconnectMsg.operatorAccount + "@" + disconnectMsg.client + ' has disconnected').addClass("disconnection"));
  });

  // Other code
  const fileSelector = document.getElementById('file');

  fileSelector.addEventListener('change', (event) => {
    console.log(event.target.files);

    const file = event.target.files[0];

    if (file) {
      $('#fileBlob').text('');

      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = (e) => {
        const resStr = reader.result;
        console.log(resStr);
        console.log(typeof resStr);

        if (resStr) {
          $('#fileBlob').text(resStr);
        }
      }
      
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader
      // reader.readAsText(file);
      reader.readAsDataURL(file);

      pinFileToIPFS(file);

    }
  });
});


const pinFileToIPFS = (fileBlob) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    // https://stackoverflow.com/questions/38917975/using-js-filereader-with-formdata

    //we gather a local file for this example, but any valid readStream source will work here.
    let data = new FormData();
    data.append('file', fileBlob);

    //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
    //metadata is optional
    const metadata = JSON.stringify({
        name: 'testname',
        keyvalues: {
            exampleKey: 'exampleValue'
        }
    });
    data.append('pinataMetadata', metadata);

    //pinataOptions are optional
    const pinataOptions = JSON.stringify({
        cidVersion: 0,
        customPinPolicy: {
            regions: [
                {
                    id: 'FRA1',
                    desiredReplicationCount: 1
                },
                {
                    id: 'NYC1',
                    desiredReplicationCount: 2
                }
            ]
        }
    });
    data.append('pinataOptions', pinataOptions);

    return axios
        .post(url, data, {
            maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
            headers: {
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
            }
        })
        .then(function (response) {
            console.log('🚀 ~ response', response);
            //handle response here
            debugger;
            if (response && response.data && response.data.IpfsHash) {
              socket.emit("ipfs file hash", response.data.IpfsHash);
              $("#m").val("");
            }
        })
        .catch(function (error) {
            console.log('🚀 ~ pinFileToIPFS ~ error', error);
            //handle error here
        });
};
