import { Board, Led } from "johnny-five";
const board = new Board();

board.on("ready", () => {
  const led = new Led();

  // This will grant access to the led instance from within the REPL that's created when running this program.
  board.repl.inject({
    led,
  })

  led.blink();
})
