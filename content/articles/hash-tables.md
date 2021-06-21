---
id: 1
title: hash tables - I
createdAt: '2019-08-16 22:10:00'
tags:
  - hash functions
  - data structures
  - key-value pairs
category: dsa
author: 
  name: karn
  twitter: gyankarn
  image: https://cdn.karngyan.com/bigheadkarngyan.png
description: this blog is quite technical and monotonous. it goes about defining hash tables, hash functions, it's properties and collision resolution techniques.
---

Hey, everyone! We're going to talk about one of the most remarkable data structure of all times, Hash Tables.

### Outline

* [What is a **Hash Table** ? ](#ht-intro)
* [What is a **Hash Function**?](#hash-function)
* [Properties of hash functions](#hf-prop)
* [How does a Hash Table works?](#hf-how)
* [Complexity Analysis](#complexity)
* [Separate Chaining](#sep-chain)
* [Open Addressing Basics](#open-addr)

<div class="breaker"></div>

### <a name="ht-intro"></a>What is a Hash table?

A **Hash table (HT)** is a data structure that provides a mapping from keys to values using a technique called **hashing**.

<table>
<colgroup>
<col width="33%" />
<col width="33%"/>
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="center" class="text-gray-200">Key(name)</th>
<th></th>
<th align="center" class="text-gray-200">Value(fav color)</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" markdown="span">"Tony" </td>
<td align="center" ><span>&#10148;</span></td>
<td align="center"  markdown="span">"red"</td>
</tr>
<tr>
<td  align="center" markdown="span">"Steve"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">"blue"</td>
</tr>
<tr>
<td  align="center" markdown="span">"Natasha"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">"black"</td>
</tr>
<tr>
<td  align="center" markdown="span">"Peter"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">"red"</td>
</tr>
</tbody>
</table>

We refer to these as ***key-value pairs***. Keys must be unique, but values can be repeated. *HTs* are often used to track item frequencies. For example, number of times a word appears in the given text.

I parsed [Shakespeare's Romeo and Juliet](http://shakespeare.mit.edu/romeo_juliet/full.html) (ignoring case) and obtained the following frequency table:

<table>
<colgroup>
<col width="33%" />
<col width="33%"/>
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="center" class="text-gray-200">Key(word)</th>
<th></th>
<th align="center" class="text-gray-200">Value(frequency)</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" markdown="span">"'tis" </td>
<td align="center" ><span>&#10148;</span></td>
<td align="center"  markdown="span">40</td>
</tr>
<tr>
<td  align="center" markdown="span">"a"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">461</td>
</tr>
<tr>
<td  align="center" markdown="span">"all"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">84</td>
</tr>
<tr>
<td  align="center" markdown="span">"and"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">84</td>
</tr>
<tr>
<td  align="center" markdown="span">"and,"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">30</td>
</tr>
<tr>
<td  align="center" markdown="span">"as"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">156</td>
</tr>
<tr>
<td  align="center" markdown="span">"be"</td>
<td align="center" ><span>&#10148;</span></td>
<td  align="center" markdown="span">196</td>
</tr>
<tr>
<td  align="center" markdown="span">...</td>
<td align="center" ><span>...</span></td>
<td  align="center" markdown="span">...</td>
</tr>
</tbody>
</table>

<div class="text-center my-2">• • •</div>

### <a name="hash-function"></a>What is a hash function?

To be able to understand, how a mapping is constructed between key-value pairs we first need to talk about hash functions.

A **hash function** *H(x)* that maps a key 'x' to a whole number in a fixed range.
For example, H(x) = (x<sup>2</sup> - 6x + 9) mod 10 maps all integer keys to the range [0,9]

- H(4) = (16 - 24 + 9) mod 10 = 1
- H(8) = (64 - 48 + 9) mod 10 = 5
- H(0) = (0 - 0 + 9) mod 10 = 9
- H(-7) = (49 + 42 + 9) mod 10 = 0
and so on.

We can also define hash functions for arbitrary objects like string, lists, tuples, multi data objects, etc. 

For a string s, let H(s) be a hash function defined below where ASCII(x) returns the ASCII value of the character x. (For more check out <a href="https://www.asciitable.com" target="_blank" rel="noreferrer">ASCII TABLE</a>)

```js
function H(s):
	sum := 0
	for char in s:
		sum = sum + ASCII(char)
	return sum mod 50
	
/*
* H("BB") = (66 + 66) mod 50 = 32
* H("") = (0) mod 50 = 0
* H("ABC") = (65 + 66 + 67) mod 50 = 48
* H("Z") = (90) mod 50 = 40
*/
```

These are certain arbitrary hash function, we will get to some sophisticated hash functions later in the post.

<div class="text-center my-2">• • •</div>

### <a name="hf-prop"></a>Properties of hash functions

> If H(x) = H(y) then objects x and y **might be equal,** but if H(x) != H(y) then x and y are **certainly not equal.**
This might help speed things up in object comparisons. This means that instead of comparing x and y directly a smarter approach is to first compare their hash values, and only if the hash values match do we need to explicitly compare x and y.

Consider the problem of trying to determine if two very large files have the same contents.

If we precomputed **H(file1)** and **H(file2)** first we should compare those hash values, since comparing hash values is **O(1) !** If possible, we do not want to open either of the files directly. Comparing their contents can be very slow, although we may have to if their hashes are equal.

***NOTE**: Hash functions for files are more sophisticated than those used for hashtables. Instead for files we use what are called cryptographic hash functions also called checksums.*


> A hash function **H(x)** must be **deterministic**.

This means that if H(x) = y then H(x) must always produce y and never another value.
This may seem obvious, but it is critical to the functionality of a hash function.

Example of a non-deterministic hash function:

```js
counter := 0
function H(x):
	counter = counter + 1
	return (x + counter) mod 13
```

The first time called H(2) = 3, but if called again H(2) = 4

We try very hard to make **uniform** hash functions to minimize the number of hash collisions.

A **hash collision** is when two objects x, y hash to the same value (i.e. H(x) = H(y)).

---

We are now able to answer a central question about the types of keys we are allowed to use in our hashtable:

Q: What makes a key of type T **hashable** ?

<div class="spoiler"><p>Since we are going to use hash functions in the implementation of our hash table we need our hash functions to be deterministic. To enforce this behaviour, we demand that the <strong>keys used in our hash table are immutable</strong> data types. Hence, if a key of type T is immutable, and we have a hash function H(k) defined for all keys k of type T then we say a key of type T is hashable.</p></div>

<div class="text-center my-2">• • •</div>

### <a name="hf-how"></a>How does a Hash Table Work ?

Ideally we would like to have a very fast insertion, lookup and removal time for the data we are placing within our hash table.

Remarkably, we can achieve all this in **O(1)**\* time using a **hash function as a way to index into a hash table.**

> The constant time behaviour attributed to hash tables is only true if you have a good **uniform hash function!**

<div>
    <div class="toleft">
        <p>Think of the hash table on the right as an indexable block of memory (an array) and we can only access its entries using the value given to us by our hash function <strong>H(x)</strong>
				<br><br>
				Suppose we're inserting (integer, string) key-value pairs into the table representing rankings of users to their usernames from an online programming competition and we're using the hash function:<br>
				<center>H(x) = x<sup>2</sup> + 3 mod 10</center>
				</p>
    </div>
    <div class="toright">
        <img class="image rounded-lg" src="/images/hash-tables/ht1.png" alt="Empty Hash Table">
        <figcaption class="caption text-center">Empty Hash Table</figcaption>
    </div>
</div>

<div class="side-by-side">
    <div class="toleft">
        <img class="image rounded-lg" src="/images/hash-tables/ht3.png" alt="Not Empty Hash Table">
        <figcaption class="caption text-center">After a few entries</figcaption>
    </div>
    <div class="toright">
        <p>
				To <strong>insert</strong> the following key-value pairs:
				(3, "tourist"),  (1, "errichto"), (5, "rpuneet") and others, we hash the key (the rank) and find out where it goes in the table.
				<center>H(3) = (3<sup>2</sup> + 3) mod 10 = 2</center><br>
				<center>H(1) = (1<sup>2</sup> + 3) mod 10 = 4</center><br>
				<center>H(5) = (5<sup>2</sup> + 3) mod 10 = 8</center><br>
				<center>H(10) = (10<sup>2</sup> + 3) mod 10 = 3</center><br>
				<center>H(32) = (32<sup>2</sup> + 3) mod 10 = 7</center><br>
				</p>
    </div>
</div>

To **lookup** which user has rank r we simply compute H(r) and look inside the hashtable! 

If we keep on inserting elements, we're bound to have a collision. So a question arises that,

Q: What do we do if there is a **hash collision**?

For example, users with ranks 2 and 8 hash to the same value, i.e. 7!!

<div class="spoiler"><p>We use one of many hash collision resolution techniques to handle this,  the two most popular ones are <strong>separate chaining</strong> and <strong>open addressing</strong>.
</p>
<p>
<strong>Separate Chaining</strong> deals with hash collisions by maintaing a data structure (usually a linked list) to hold all the different values which hashed to a particular value.</p>
<p>
<strong>Open Addressing</strong> deals with hash collisions by finding another place within the hash table for the object to go by offsetting it from the position to which it hashed to.</p></div>

---

### <a name="complexity"></a>Complexity

The time complexity of hash tables is actually pretty remarkable, in fact it's amazing.
<style>
table.cTable {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #41413d;
  border-style: solid;
  color: #000000;
	text-align: center;
}

table.cTable td, table.cTable th {
  border-width: 2px;
  border-color: #41413d;
  border-style: solid;
  padding: 10px;
}

table.cTable thead {
  background-color: #cccccc;
}
</style>

<table class="cTable">
  <thead>
    <tr>
      <th>Operation</th>
      <th>Average</th>
      <th>Worst</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Insertion</td>
      <td>O(1)*</td>
      <td>O(n)</td>
    </tr>
		 <tr>
      <td>Removal</td>
      <td>O(1)*</td>
      <td>O(n)</td>
    </tr>    
		<tr>
      <td>Search</td>
      <td>O(1)*</td>
      <td>O(n)</td>
    </tr>
  </tbody>
</table>

* The constant time behaviour attributed to hash tables is only true if you have a good **uniform hash function**!

<div class="breaker"></div>

### <a name="sep-chain"></a>Separate Chaining

As I mentioned earlier, **Separate Chaining** is one of many strategies to deal with hash collisions by maintaining a data structure (usually a linked list) to hold all the different values which hashed to a particular value.

**NOTE:** The data structure used to cache the items which hashed to a particular value is not limited to a linked list. Some implementations use one or a mixture of: arrays, binary trees, self balancing tress and etc.

---
#### Linked List Separate Chaining Insertion and Lookup

Suppose we have a hash table that will store (name, age) key-value pairs and we wish to insert the following entries:

(Using an arbitrary hash function defined for strings we can assign each key a hash value)

<table class="cTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Hash</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Will</td>
      <td>21</td>
      <td>3</td>
    </tr>
		 <tr>
      <td>Leah</td>
      <td>18</td>
      <td>4</td>
    </tr>    
		<tr>
      <td>Rick</td>
      <td>61</td>
      <td>2</td>
    </tr>
				<tr>
      <td>Rai</td>
      <td>25</td>
      <td>1</td>
    </tr>		<tr>
      <td>Lara</td>
      <td>34</td>
      <td>4</td>
    </tr>		<tr>
      <td>Ryan</td>
      <td>56</td>
      <td>1</td>
    </tr>		<tr>
      <td>Lara</td>
      <td>34</td>
      <td>4</td>
    </tr>		<tr>
      <td>Finn</td>
      <td>21</td>
      <td>3</td>
    </tr>		<tr>
      <td>Mark</td>
      <td>10</td>
      <td>4</td>
    </tr>
  </tbody>
</table>


![Separate Chaining Linked List Image](/images/hash-tables/separate-chaining.png)
<figcaption class="caption">Linked List Separate Chaining</figcaption>

For lookups, suppose we need to find age of "Ryan", we hash the key "Ryan" to obtain the value (index) 1.

After this scan the 1 **bucket** for the key "Ryan".

It may happen that the value you are looking for does not exist in bucket the key hashed to in which case the item does not exist in the HT.

---

#### Time for some questions that are crying out loud to be answered.<br>
Q: How do I maintain **O(1)** insertion and lookup time complexity once my HT gets really full and I have long linked list chains?
<div class="spoiler">
	<p>
Once the HT contains a lot of elements you should create a new HT with a larger capacity and rehash all the items inside the old HT and disperse them throughout the new HT at different locations.
	</p>
</div>

Q: How do I **remove** key-value pairs from my HT ?
<div class="spoiler">
	<p>
Apply the same procedure as doing lookup for a key, but this time instead of returning the value associated with the key, remove the node in the linked list data structure.
	</p>
</div>

Q: Can I use another data structure to model the bucket behaviour required for the separate chaining method ?
<div class="spoiler">
	<p>
	Of course! Common data structures used instead of a linked include: <strong>arrays</strong>, <strong>binary trees</strong>, <strong>self balancing trees</strong>, etc.. You can even go with a hybrid approach like Java's HashMap. However, note that some of those are much more memory intensive and complex to implement than a simple linked list which is why they may be less popular.
	</p>
</div>

Here's my implementation of Hash Tables using Separate Chaining in C++:

[Skip to the bottom of this 262 line gist](#open-addr)
```cpp
/*

	An implementation of a hash-table 
	using separate chaining with a linked list.

	@author: Gyan Prakash Karn, karngyan@gmail.com

*/

#include<iostream>
#include<limits>
#include<vector>
#include<algorithm>
#include<string>
#include<cfloat>

template<class K, class V>
class Entry {

	template<class A, class B>
	friend std::ostream& operator<<(std::ostream &strm, const Entry<A, B> & entry) {
		return strm << entry.key << " => " << entry.value;
	}

public:

	std::hash<K> H;
	long long int hash;
	K key;
	V value;

	template<class A, class B>
	Entry(A k, B v) {
		key = k;
		value = v;
		hash = H(key);
	}

	bool operator== (const Entry & other) {
		if (hash != other.hash) return false;
		return key == other.key;
	}
};



template<class K, class V>
class HashTableSeparateChaining {
	
	constexpr static int DEFAULT_CAPACITY = 3;
	constexpr static double DEFAULT_LOAD_FACTOR = 0.75;
	double maxLoadFactor;
	int capacity, threshold, sze = 0;
	std::vector<std::vector <Entry<K, V>>> table;
	std::hash<K> H;


public:
	//designated constructor
	HashTableSeparateChaining(int cap, double mLF) {
		if (cap < 0) 
			throw std::invalid_argument("Illegal capacity");
		if (mLF <= 0 or mLF == DBL_MAX) 
			throw std::invalid_argument("Illegal maxLoadFactor");
		maxLoadFactor = mLF;
		capacity = cap;
		threshold = (int) (capacity * maxLoadFactor);
		table.clear();
		table.resize(capacity);
	}

	HashTableSeparateChaining(int cap) : HashTableSeparateChaining(cap, DEFAULT_LOAD_FACTOR){}
	
	HashTableSeparateChaining() : HashTableSeparateChaining(DEFAULT_CAPACITY, DEFAULT_LOAD_FACTOR){}

	// return number of elements currently inside the hash table
	int size() {
		return sze;
	}

	// returns true/false depending on whether teh hash-table is empty
	bool empty() {
		return sze == 0;
	}

	// clear all content
	void clear() {
		for (int i = 0 ; i < capacity ; ++i) table[i].clear();
		sze = 0;
	}

	// returns true/false depending on whether a key is in the hash table
	bool hasKey(K key) {
		int bucketIndex = normalizeIndex(H(key));
		return bucketSeekEntry(bucketIndex, key) != NULL;
	}

	bool containsKey(K key) {
		return hasKey(key);
	}

	// insert, put, add all place a value in the hash-table
	void put(K key, V value) {
		insert(key, value);
	}

	void add(K key, V value) {
		insert(key, value);
	}

	void insert(K key, V value) {
		Entry<K, V> newEntry(key, value);
		int bucketIndex = normalizeIndex(newEntry.hash);
		bucketInsertEntry(bucketIndex, newEntry);
	}

	// Gets a key's values from the HT and returns the value.
	V* get(K key) {
		int bucketIndex = normalizeIndex(H(key));
		Entry<K, V> *entry = bucketSeekEntry(bucketIndex, key);
		if (entry != NULL) return entry->value;
		return NULL;
	}

	// Removes a key from the HT and returns the value.
	V* remove(K key) {
		int bucketIndex = normalizeIndex(H(key));
		return bucketRemoveEntry(bucketIndex, key);
	}

	// Returns the list of keys found within the hash table
	std::vector<K> keys() {

		std::vector<K> keys(size());
		for (auto bucket : table) {
			if (bucket != NULL) {
				for (auto entry : bucket) {
					keys.push_back(entry.key);
				}
			}
		}

		return keys;
	}

	// Returns the list of values found within the hash table
	std::vector<V> values() {

		std::vector<V> values(size());
		for (auto bucket : table) {
			if (bucket != NULL) {
				for (auto entry : bucket) {
					values.push_back(entry.value);
				}
			}
		}

		return values;
	}

	void showAll() {
		std::cout << "{\n";
		for (int i = 0 ; i < capacity ; ++i) {
			if (table[i].size()) {
				for (auto entry : table[i]) {
					std::cout << "\t" << entry << "\n";
				}
			}
		}
		std::cout << "}\n";
	}

private:
	// converts a hash value to an index
	// basically removing negative sign (i.e. hghest bit)
	// placing it in domain [0, capacity)
	int normalizeIndex(int keyHash) {
		return (keyHash & 0x7FFFFFFF) % capacity;
	}

	// Removes an entry from a given bucket if exists
	V* bucketRemoveEntry(int bucketIndex, K key) {
		Entry<K, V> *entry = bucketSeekEntry(bucketIndex, key);

		if (entry != NULL) {
			std::vector <Entry<K, V>> &links = table[bucketIndex];
			auto nodeToErase = std::find(links.begin(), links.end(), *entry);
			links.erase(nodeToErase);
			--sze;
			return &(entry->value);
		} else return NULL;
	}

	// Inserts an entry in a given bucket only if the entry does not
	// alreasy exist in the given bucket, but if it does -> update it
	void bucketInsertEntry(int bucketIndex, Entry<K, V> entry) {

		std::vector <Entry<K, V>> &bucket = table[bucketIndex];

		Entry<K, V> * existentEntry = bucketSeekEntry(bucketIndex, entry.key);
		if (existentEntry != NULL) {
			existentEntry->value = entry.value;
		} else {
			bucket.push_back(entry);
			if (++sze > threshold) resizeTable();
		}
	}

	// Finds and returns a particular entry in a given bucket if it exists, 
	// return NULL otherwise
	Entry<K, V> * bucketSeekEntry(int bucketIndex, K key) {

		if (table[bucketIndex].empty()) return NULL;

		for (size_t i = 0 ; i < table[bucketIndex].size() ; ++i) {
			Entry<K, V> * entry = &table[bucketIndex][i];
			if (entry->key == key) return entry;
		}

		return NULL;
	}

	// Resizes the internal table holding buckets of entries
	void resizeTable() {

		int oldCapacity = capacity;
		capacity *= 2;
		threshold = (int) (capacity * maxLoadFactor);

		std::vector< std::vector <Entry<K, V>> > newTable(capacity);
		int tableLength = oldCapacity;
		for (int i = 0 ; i < tableLength ; ++i) {
			if (table[i].size()) {
				for (Entry<K, V> entry : table[i]) {
					int bucketIndex = normalizeIndex(entry.hash);
					newTable[bucketIndex].push_back(entry); 
				}
			}

			// Help the GC
			table[i].clear();
		}

		table = newTable;
	}
};

int main() {

	HashTableSeparateChaining<std::string, std::string> map;
	map.insert("tourist", "red");
	map.insert("rpuneet", "purple");
	
	map.showAll();
	
	map.remove("rpuneet");
	map.showAll();

	
	return 0;
	
}
```

<div class="breaker"></div>

### <a name="open-addr"></a>Open Addressing

#### Let's go over some basics!

The goal of the **Hash Table (HT)** is to construct a **mapping** from keys to values.

Keys must be **hashable** and we need a **hash function** that converts keys to whole numbers.

We use the hash function defined on our key set to **index into** an array (the hash table).

Hash functions are not perfect, therefore sometimes two keys k1, k2 (k1 != k2) hash to the same value. When this happens we have a **hash collision** (i.e. H(k1) = H(k2))

**Open Addressing** is a way to solve this issue.

When using open addressing as a collision resolution technique the key-value pairs are stored in the table (array) itself as opposed to a data structure like in separate chaining.

This means we need to care a great deal about the size of our hash table and how many elements are currently in the table.

**Load factor** = (items in table) / (size of table)

<div class="side-by-side">
    <div>
        <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Hash_table_average_insertion_time.png" alt="ChainingVProbing">
        <figcaption class="caption">Source: Wikipedia</figcaption>
    </div>
    <div>
        <p>The O(1) constant time behaviour attributed to hash tables assumes the load factor (α) is kept below a certain fixed value. This means once α > <strong>threshold</strong> we need to grow the table size (ideally exponentially, e.g. double). As it shows in the graph.</p><hr>
				<p>
				When we want to insert a key-value pair (k, v) into the hash table we hash the key and obtain an original position for where this key-value pair belongs, i.e. H(k).
				</p>
    </div>
</div>

If the position our key hashed to is occupied we try another position in the hash table by offsetting the current position subject to a **Probing Sequence P(x)**. We keep doing this until an unoccupied slot is found.

---

There are infinite amount of probing sequences you can come up with, here are a few:

**Linear Probing:**

P(x) = ax + b, where a,b are constants

**Quadratic Probing:**

P(x) = ax<sup>2</sup> + bx + c, where a, b, c are constants

**Double Hashing:**

P(k, x) = x\*H<sub>2</sub>(k), where H<sub>2</sub>(k) is a secondary hash function.

**Pseudo random number generator:**

P(k, x) = x\*RNG(H(k), x), RNG is a random number generator function seeded with H(k).

---

General insertion method for open addressing on a table of size N goes as follows:

```js
x := 1
keyHash := H(k)
index := keyHash

while table[index] != null:
	index = (keyHash + P(k, x)) mod N
	x = x+1
	
insert (k, v) at table[index] 
```

Here H(k) is the hash function for the key k and P(k, x) is the probing function.

---

#### Chaos with cycles

Here's the big issue with open addressing. Most randomly selected probing sequences modulo N will produce a cycle shorter than the table size.

This becomes problematic when you are trying to insert a key-value pair and all the buckets on the cycle are occupied because you will get stuck in an **infinite loop**!

Suppose we have a hash table of size 8 which is already partially full. The occupied cells are filled with a key-value pairs (k<sub>i</sub>, v<sub>i</sub>) and empty cells with a null token: ϕ

<table class="cTable">
  <thead>
    <tr>
      <th>0</th>
      <th>1</th>
      <th>2</th>
			<th>3</th>
			<th>4</th>
			<th>5</th>
			<th>6</th>
			<th>7</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ϕ</td>
			<td>k1, v1</td>
			<td>ϕ</td>
			<td>k2, v2</td>
			<td>k3, v3</td>
			<td>k4, v4</td>
			<td>ϕ</td>
			<td>ϕ</td>
    </tr>
  </tbody>
</table>

Assume the probing sequence used is P(x) = 4x

Now suppose we want to insert (k, v) into the table and H(k) = 5

Now we check the table and it seems to be occupied, so we probe:

index = H(k) = 5 + 0 mod 8 = 5<br>
index = H(k) + P(1) = 5 + 4 mod 8 = 1<br>
index = H(k) + P(2) = 5 + 8 mod 8 = 5<br>
index = H(k) + P(3) = 5 + 12 mod 8 = 1<br>
...<br>

Whoops! We got stuck in a cycle. So although we have a probing function, it does not work.

Q: So that's concerning, how do we handle probing functions which produce cycles shorter than the table size ?

<div class="spoiler">
	<p>
		In general the consensus is that we don't handle this issue, instead we avoid it altogether by restricting our domain of probing functions to those which produce a cycle of exactly length N*
	</p>
	<p>* There are a few exceptions with special properties that can produce shorter cycles.</p>
</div>

---

All techniques such as linear, quadratic probing and double hashing are prone to the issue of causing cycles which is why the **probing functions used with these methods are very specific**.

Notice that open addressing is very sensitive to the hashing and probing function. This is not something one has to worry about if they're using **separate chaining** as a collision resolution method. And may be that is why I like it a little more. :P
<div class="breaker"></div>
Hope You liked it till now!
I'll cover more about Probing Functions and their source code in the next part of the blog.
