# ypu

decentralized computing in the browser at [https://scenaristeur.github.io/ypu/](https://scenaristeur.github.io/ypu/).



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# ws noosphere
-  "wss://flame-long-base.glitch.me/",
-  "wss://yjs-leveldb.glitch.me/", // with leveldb

# voir aussi 
- [scenaristeur/ypu-node](https://github.com/scenaristeur/ypu-node)


# 16 bits cpu in js

- https://francisstokes.wordpress.com/2017/07/20/16-bit-vm-in-javascript/
- https://www.youtube.com/watch?v=fTBwD3sb5mw
- https://github.com/francisrstokes/16bitjs
- https://github.com/lj-ditrapani/16-bit-computer-specification/blob/main/ISA.md
- https://github.com/lj-ditrapani/16-bit-computer-specification
- https://www.npmjs.com/package/ljd-16-bit-cpu
- https://lj-ditrapani.github.io/16-bit-cpu-ts/
- 8 bits https://www.youtube.com/watch?v=HyznrdDSSGM&list=PLowKtXNTBypGqImE405J2565dvjafglHU
- https://github.com/lj-ditrapani/16-bit-computer-specification/blob/main/assembler/assembly-language.md

# jsqubit tutorial
- https://davidbkemp.github.io/jsqubits/jsqubitsTutorial.html
- a user encrypt task with qbutis, add it to the todo list, the worker process the task, then the user decrypt the result

```
Superdense coding

Superdense coding allows you to communicate two classical bits of data by transmitting only a a single qubit. Note that, as this technique can only be applied to classical bits, it can not be used on the resulting qubits to do any further compression.

There is an important catch to superdense coding. The communicating parties need to have pre-arranged for the data exchange by obtaining qubits that have been specially prepared together in what is called an "entangled" state. So superdense coding would only be useful if the two parties know that they will be communicating well in advance of the time at which the communication is to occur.

Say Alice wishes to transmit two classical bits to Bob. The outline of the process is as follows: a) A pair of qubits are entangled, one given to Alice and one to Bob. b) Alice encodes the two bits of information into her single qubit an sends it to Bob. c) Bob manipulates both his own qubit and the qubit sent by Alice to extract the two bits.
Entangling the qubits

As mentioned, superdense coding requires two qubits to be prepared in an entangled state. This means that the two qubits are in a superposition of states and that their states are correlated in some way. For this example we require that the qubits are in the state:
√(1/2)|00> + √(1/2)|11>

When in this state, the two qubits are either both 0 or both 1. The easiest way to simulate this in jsqubits is to start with the two qubits in the state |00>, apply a Hadamard operation to one of them, and then apply what is called a "controlled-not" (or cnot) operator on the pair of them. So, before we can progress further, we need to explore the "not" and "cnot" operators.

The "not" operator simply flips a qubit (just like its classical equivalent). In jsqubits, QState objects have a "not" method that takes the index of the bit to be flipped. For, example, jsqubits('|00>').not(1) results in |10>.

The controlled-not or "cnot" operator requires both a target bit and a control bit. It will flip the target bit if, and only if, the control bit has a value of 1. In jsqubits, the cnot operator takes the control bit as its first argument and the targit bit as its second. For example, jsqubits('|00>').cnot(1,0) leaves the state unchanged as |00>, but jsqubits('|10>').cnot(1,0) results in |11>

So, to prepare two qubits in the state √(1/2)|00> + √(1/2)|11>, you can do the following in jsqubits:
jsqubits('|00>').hadamard(1).cnot(1,0)
Encoding two classical bits into one qubit

To encode two bits into one qubit, we need to introduce the Pauli operators (named after the physicist Wolfgang Pauli). There are three Pauli operators, X, Y and Z. The X operator is just another name for the "not" operator. i.e. it just flips the bit of the qubit to which it is applied. In jsqubits, the x() and controlledX() methods are aliases for not() and cnot() respectively.

Instead of flipping the qubit to which it is applied, the Z operator flips the sign of the amplitude of the |1> component of the qubit, and leaves the amplitude of the |0> component untouched. So, in jsqubits, jsqubits('|0>').z(0) leaves the state as |0>, and jsqubits('|1>').z(0) results in the state -1 |1> (i.e. it is still in a |1> state, but its amplitude is -1).

As an illustrative example, consider the effect of combining the Hadamard and Z operators. If a qubit is initially in a state of |0>, then applying a Hadamard will result in √(1/2)|0> + √(1/2)|1>. If you apply the Z operator this this you get √(1/2)|0> - √(1/2)|1> and, finally, after applying a Hadamard again, you will get: |1>. i.e. jsqubits('|0>').hadamard(0).z(0).hadamard(0) gives |1>.

The controlledZ() method, like the cnot method, requires both a target bit and a control bit. It only applies the Z operator if the control bit is 1.

The only remaining Pauli operator is the Y operator. We do not actually require this operator for the algorithms covered in this tutorial, but it is mentioned here for completeness. The Y operator is quite tricky to describe. It is equivalent to applying the Z operator, then the X operator, and then multiplying the amplitudes by the imaginary number i. So, in jsqubits, jsqubits('|0>').y(0) leaves the state as i |1>, and jsqubits('|1>').y(0) results in the state -i |0>.

We can now describe how to encode two classical bits into one qubit. Recall that Alice has two classical bits, a and b, and has one of a pair of entangled qubits, and Bob has the other member of the pair.

    If a = 1, then Alice applies the Z operator to her qubit.
    If b = 1, then Alice applies the X operator to her qubit.

If both a and b are 1's, then Alice applies both the Z and the X operator to her qubit.

This can be simulated in jsqubits with the following code:

// The bits to be sent to Alice are set in the string called input:
var input = "10";

// First, create a pair of entangled qubits
var state = jsqubits('|00>').hadamard(0).cnot(0,1);

// Assume that qubit 0 is sent to Bob, and that qubit 1 is sent to Alice.

//            Alice prepares her qubit (qubit 1)
var alice = 1;
if (input.charAt(0) === '1') {
    state = state.z(alice);
}
if (input.charAt(1) === '1') {
    state = state.x(alice);
}

// Alice sends her qubit to Bob.
Decoding the qubit into the original classical bits

Once Alice has encoded her two classical bits into her one qubit, she can send that qubit to Bob, and Bob can proceed to decode the qubit as follows.

    Apply a controlled-not operation, using Alice's qubit as the control, and Bob's qubit as the target.
    Apply a Hadamard operation to Alice's qubit.
    Measure both qubits.

At the end of these steps, the value measured for Alice's qubit will be the original value of "a", and the value measured for Bob's qubit will be the original value of "b".

Here is the full algorithm in jsqubits (try it out in the jsqubits runner):

// The bits to be sent to Alice are set in the string called input:
var input = "10";

// First, create a pair of entangled qubits
var state = jsqubits('|00>').hadamard(0).cnot(0,1);

// Assume that qubit 0 is sent to Bob, and that qubit 1 is sent to Alice.

//            Alice prepares her qubit (qubit 1)
var alice = 1;
if (input.charAt(0) === '1') {
    state = state.z(alice);
}
if (input.charAt(1) === '1') {
    state = state.x(alice);
}

// Alice sends her qubit to Bob.

// Bob recovers the input bit values.
var bob = 0; // Bob's qubit
state = state.cnot(alice, bob).hadamard(alice);
state.measure(ALL).asBitString();
```
https://github.com/ychenz/quantum_computing_materials

 - Q.js https://quantumjavascript.app/
 - https://github.com/shd101wyy/qubit.js/
 - https://github.com/davidbkemp/animated-qubits
 - https://dev.to/codesphere/quantum-computing-with-javascript-using-qjs-31k0



 - i18n
- https://vue-i18n.intlify.dev/guide/advanced/lazy.html
