var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec_setting",
  "level": "1",
  "url": "sec_setting.html",
  "type": "Section",
  "number": "1.1",
  "title": "The General Setting",
  "body": " The General Setting  In crypto, we have two parties---Alice and Bob---and they trust each other. They also need to share some sensitive information. They cannot meet to hare this data in person, so they must transmit it over some kind of communication channel. There is a major problem, however: this is an open channel , meaning that Alice and Bob must assume that anything sent over this line may be seen by anyone in the world. In particular, their adversary Eve---a notorious eavesdropper---is listening to all of their communications.   Eve listening to Alice and Bob   This is the main problem in cryptography: how can Alice and Bob safely exchange sensitive data, doing so in the presence of eavesdroppers? The idea of modern crypto is this: solve this problem by discovering ways of hiding secrets inside of very hard math problems. In other words, only by solving a certain math problem could Eve uncover Alice and Bob's secrets. If this problem is impossible to solve, then Eve cannot read their secrets. On the other hand, as allies, Alice and Bob will possess an added bit of information---called the key ---that will allow them to easily solve the problem, so they are free to read each other's secrets. Without the key, Eve cannot read anything. What I have just described is the model for symmetric or private key crypto. There is another type of crypto we will encounter later in the semester known as asymmetric or public key crypto.   This seems to be the perfect solution to the main problem of secure secrecy. However, it turns out that generating the right kind of \"hard\" math problems is incredibly difficult. This class is about the kind of mathematics used in modern crypto. We will start with some classical encryption schemes, systems that are easily breakable. In fact, you will be breaking some of them yourself. So why study a broken system? Because if you can understand what makes a scheme insecure, you can start to understand how to improve it. By the end of the semester, you will completely understand several of the algorithms used in actual modern day crypto.  To discuss all this interesting stuff, we need some language. (The best way to understand all of this is through an example, which we'll get to shortly.) Suppose Alice needs to send to Bob an important yet secret message and they have agreed to use a particular encryption scheme. The scheme that they use is called the algorithm for encryption. Alice's message in its raw, readable format is called the plaintext . We don't want Eve to know this. Now, the plaintext message was structured in some way as a string of symbols. The set of symbols we are allowed to use in our messages is the alphabet of our encryption scheme.  Next she selects a secret key  , and encrypts her plaintext message into an unreadable message using the key . This unreadable, coded message is called the ciphertext , and it is also structured out of the same alphabet. In a good encryption scheme, knowledge of the ciphertext is not enough to reveal the true plaintext.  Alice then transmits the ciphertext message across the open line. Bob receives the ciphertext, but Bob also possesses the same secret key . Bob uses this key to decrypt the ciphertext message back into the plaintext. Hence Bob can recover the plaintext, but since she does not possess the key, Eve cannot.  Let's pause and look at a concrete example of an encryption scheme.  "
},
{
  "id": "sec_setting-4",
  "level": "2",
  "url": "sec_setting.html#sec_setting-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric private key asymmetric public key "
},
{
  "id": "sec_setting-6",
  "level": "2",
  "url": "sec_setting.html#sec_setting-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "algorithm plaintext alphabet "
},
{
  "id": "sec_setting-7",
  "level": "2",
  "url": "sec_setting.html#sec_setting-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "key ciphertext "
},
{
  "id": "sec_shift",
  "level": "1",
  "url": "sec_shift.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Shift Cipher",
  "body": " The Shift Cipher  Suppose Alice and Bob need to exchange sentences in English. As a first step, they must agree on an alphabet, so a good choice would be the lowercase letters a-z:  "
},
{
  "id": "sec_inspo",
  "level": "1",
  "url": "sec_inspo.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Inspiration",
  "body": " The Inspiration  "
},
{
  "id": "sec_legit",
  "level": "1",
  "url": "sec_legit.html",
  "type": "Section",
  "number": "2.2",
  "title": "Congruence, Legitimately",
  "body": " Congruence, Legitimately  "
},
{
  "id": "sec_alg",
  "level": "1",
  "url": "sec_alg.html",
  "type": "Section",
  "number": "2.3",
  "title": "Algebra with Congruences",
  "body": " Algebra with Congruences  "
},
{
  "id": "sec_coll",
  "level": "1",
  "url": "sec_coll.html",
  "type": "Section",
  "number": "3.1",
  "title": "Collisions and Affine Encryption",
  "body": " Collisions and Affine Encryption  "
},
{
  "id": "sec_inv",
  "level": "1",
  "url": "sec_inv.html",
  "type": "Section",
  "number": "3.2",
  "title": "Invertibility and Units",
  "body": " Invertibility and Units  "
},
{
  "id": "sec_invaff",
  "level": "1",
  "url": "sec_invaff.html",
  "type": "Section",
  "number": "3.3",
  "title": "Units and Affine Encryption",
  "body": " Units and Affine Encryption  "
},
{
  "id": "chap_attacks",
  "level": "1",
  "url": "chap_attacks.html",
  "type": "Chapter",
  "number": "4",
  "title": "The Five Standard Attacks",
  "body": " The Five Standard Attacks  "
},
{
  "id": "sec_gcd",
  "level": "1",
  "url": "sec_gcd.html",
  "type": "Section",
  "number": "5.1",
  "title": "Greatest Common Divisors",
  "body": " Greatest Common Divisors  "
},
{
  "id": "sec_euclid",
  "level": "1",
  "url": "sec_euclid.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Euclidean Algorithm",
  "body": " The Euclidean Algorithm  "
},
{
  "id": "sec_invmod",
  "level": "1",
  "url": "sec_invmod.html",
  "type": "Section",
  "number": "5.3",
  "title": "Invertibility mod <span class=\"process-math\">\\(n\\)<\/span>",
  "body": " Invertibility mod  "
},
{
  "id": "sec_prop",
  "level": "1",
  "url": "sec_prop.html",
  "type": "Section",
  "number": "6.1",
  "title": "Properties of <span class=\"process-math\">\\(\\ephi\\)<\/span>",
  "body": " Properties of  PARAGRAPH  "
},
{
  "id": "sec_proofs",
  "level": "1",
  "url": "sec_proofs.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Proofs",
  "body": " The Proofs  "
},
{
  "id": "chap_DH1",
  "level": "1",
  "url": "chap_DH1.html",
  "type": "Chapter",
  "number": "7",
  "title": "Diffie-Hellman Key Exchange:  The Protocol",
  "body": " Diffie-Hellman Key Exchange: The Protocol  "
},
{
  "id": "sec_primes",
  "level": "1",
  "url": "sec_primes.html",
  "type": "Section",
  "number": "8.1",
  "title": "Primes",
  "body": " Primes  "
},
{
  "id": "sec_prim",
  "level": "1",
  "url": "sec_prim.html",
  "type": "Section",
  "number": "8.2",
  "title": "Primitive Elements",
  "body": " Primitive Elements  "
},
{
  "id": "sec_dlp",
  "level": "1",
  "url": "sec_dlp.html",
  "type": "Section",
  "number": "8.3",
  "title": "The Discrete Log Problem",
  "body": " The Discrete Log Problem  "
},
{
  "id": "chap_PKC",
  "level": "1",
  "url": "chap_PKC.html",
  "type": "Chapter",
  "number": "9",
  "title": "Public Key Cryptography",
  "body": " Public Key Cryptography  "
},
{
  "id": "sec_egidea",
  "level": "1",
  "url": "sec_egidea.html",
  "type": "Section",
  "number": "10.1",
  "title": "The Idea",
  "body": " The Idea  "
},
{
  "id": "sec_egscheme",
  "level": "1",
  "url": "sec_egscheme.html",
  "type": "Section",
  "number": "10.2",
  "title": "The ElGamal Scheme",
  "body": " The ElGamal Scheme  "
},
{
  "id": "sec_EGattacks",
  "level": "1",
  "url": "sec_EGattacks.html",
  "type": "Section",
  "number": "11.1",
  "title": "The Standard Attacks",
  "body": " The Standard Attacks  "
},
{
  "id": "sec_EGCCA",
  "level": "1",
  "url": "sec_EGCCA.html",
  "type": "Section",
  "number": "11.2",
  "title": "ElGamal and Chosen Ciphertext Attacks",
  "body": " ElGamal and Chosen Ciphertext Attacks  "
},
{
  "id": "sec_setup",
  "level": "1",
  "url": "sec_setup.html",
  "type": "Section",
  "number": "12.1",
  "title": "The Setup",
  "body": " The Setup  "
},
{
  "id": "sec_keygen",
  "level": "1",
  "url": "sec_keygen.html",
  "type": "Section",
  "number": "12.2",
  "title": "Key Generation",
  "body": " Key Generation  "
},
{
  "id": "sec_secpriv",
  "level": "1",
  "url": "sec_secpriv.html",
  "type": "Section",
  "number": "12.3",
  "title": "Secrecy of the Private Key",
  "body": " Secrecy of the Private Key  "
},
{
  "id": "sec_setup2",
  "level": "1",
  "url": "sec_setup2.html",
  "type": "Section",
  "number": "13.1",
  "title": "The Setup",
  "body": " The Setup  "
},
{
  "id": "sec_ingred",
  "level": "1",
  "url": "sec_ingred.html",
  "type": "Section",
  "number": "13.2",
  "title": "The Ingredients",
  "body": " The Ingredients  "
},
{
  "id": "sec_proof",
  "level": "1",
  "url": "sec_proof.html",
  "type": "Section",
  "number": "13.3",
  "title": "The Proof",
  "body": " The Proof  "
},
{
  "id": "sec_ETproof",
  "level": "1",
  "url": "sec_ETproof.html",
  "type": "Section",
  "number": "13.4",
  "title": "The Proof of Euler’s Theorem",
  "body": " The Proof of Euler's Theorem  "
},
{
  "id": "sec_first3",
  "level": "1",
  "url": "sec_first3.html",
  "type": "Section",
  "number": "14.1",
  "title": "The First Three Attacks",
  "body": " The First Three Attacks  "
},
{
  "id": "sec_RSACCA",
  "level": "1",
  "url": "sec_RSACCA.html",
  "type": "Section",
  "number": "14.2",
  "title": "RSA and Chosen Ciphertext Attacks",
  "body": " RSA and Chosen Ciphertext Attacks  "
},
{
  "id": "chap_digsig",
  "level": "1",
  "url": "chap_digsig.html",
  "type": "Chapter",
  "number": "15",
  "title": "RSA Digital Signatures",
  "body": " RSA Digital Signatures  "
},
{
  "id": "chap_mss",
  "level": "1",
  "url": "chap_mss.html",
  "type": "Chapter",
  "number": "16",
  "title": "The Method of Successive Squaring",
  "body": " The Method of Successive Squaring  "
},
{
  "id": "chap_ZKP",
  "level": "1",
  "url": "chap_ZKP.html",
  "type": "Chapter",
  "number": "17",
  "title": "Zero-Knowledge Proofs",
  "body": " Zero-Knowledge Proofs  "
},
{
  "id": "chap_DCP",
  "level": "1",
  "url": "chap_DCP.html",
  "type": "Chapter",
  "number": "18",
  "title": "The Dining Cryptographers Problem",
  "body": " The Dining Cryptographers Problem  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
