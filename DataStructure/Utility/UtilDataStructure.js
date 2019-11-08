/*
 * @purpose :to deploy all the business logic related to DataStructure
 * @file    :Utility.js
 
 */
/************************************LinkedListImplementation**************************************
 * 1.UnorderedLinkedList
 * 2.OrderedLinkedList
 ***************************************************************************************************/
//var utility = require("../DataStructure/Utility/Util")
class Node
{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

//LinkedList class
class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    /*
     *@purpose :function to add data at given position
     */
    addPos(arr, num)
    {
        console.log(num + " in addPos");
        for(let i = 0; i < arr.length - 1; i++)
        {
            if(arr[0] <= num)
            {
                return 0;
            }
            else if(arr[i] < num && arr[i + 1] >= num)
            {
                return i + 1;
            }
        }
        return arr.length;
    }

    /*
     * @purpose :function to insert element at given position 
     */
    insertAt(element, index)
    {
        if(index < 0 && index > this.size)
            return false;
        else
        {
            var node = new Node(element);
            var current, previous;
            current = this.head;
            if(index == 0)
            {
                node.next = head;
                this.head = node;
            }
            else
            {
                current = this.head;
                var it = 0;
                while(it < index)
                {
                    it++;
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }

    /**
     * @purpose :   function to add data into list
     */
    add(data)
    {
        var node = new Node(data);
        if(this.head == null)
        {
            this.head = node;
        }
        else
        {
            var temp = this.head;
            while(temp.next)
            {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.add.size++;
    }

    /**
     * @purpose :   function to search data into list
     */

    contain(data1)
    {
        var temp = this.head;
        while(temp)
        {
            if(temp.data == data1)
            {
                return true;
            }
            else
                temp = temp.next;
        }
        return false;
    }

    /** 
     * @purpose : function to insert element in list
     */
    insert(element)
    {
        var n = new Node(element)
        if(this.head == null)
        {
            this.head = n;
            this.size++;
            return;
        }
        else
        {
            n.next = this.head;
            this.head = n;
            this.size++;
            return;
        }
    }

    /**
     * @purpose : function to remove data into list
     * @param {*} data 
     */
    remove(data)
    {
        var temp = this.head;
        var t = null;
        while(temp != null)
        {
            if(temp.data == data)
            {
                if(t == null)
                {
                    this.add.head = temp.next;
                }
                else
                {
                    t.next = temp.next;
                }
                this.size--;
                return temp.data;
            }
            t = temp;
            temp = temp.next;
        }
        return -1;
    }

    /**
     * @purpose : display the data from list
     */
    print()
    {
        var st = "";
        var temp = this.head;
        while(temp)
        {
            st = st + " " + temp.data;
            temp = temp.next;
        }
        return st;
    }

    /**
     * @Purpose : function to get size of linkedlist
     */
    getsize()
    {
        return this.size;
    }
    printElement()
    {
        var temp = this.head;
        while(temp)
        {
            var str1 = "";
            str1 = str1 + "name :" + temp.data.name + ", share : " + temp.data.share + ", price : " + temp.data.price;
            console.log(str1);
            temp = temp.next;  
        }
    }
}

/****************************************************StackImplementation**********************************/
                                                   /*BalancedParenthesis*/
 /*********************************************************************************************************/
class Stack 
{
    constructor() 
    {
        this.item = [];
        this.capacity;
        this.top = -1;
        this.size = 0;
    }
    size() 
    {
        return this.size;
    }
    isEmpty() {
        if (this.size == 0) 
        {
            return true;
        }
        else
            return false;
    }
    push(data) 
    {
        if (this.top == this.capacity - 1) 
        {
            console.log("stack overflow");
            return;
        }
        this.size++;
        this.item[++this.top] = data;
    }

    pop() {
        if (this.top == -1)
            console.log("stack is empty");
        this.size--;
        return this.item.pop();

    }

    peek() {
        if (this.top == -1) 
        {
            console.log("stack is empty");
        }
        return this.item[top];
    }

    print() 
    {
        var str = " ";
        for (let i = 0; i < this.size; i++) 
        {
            str = str + " " + item[i];

        }
        return str;
    }
}



/****************************************************QueueImplementation**********************************/
                                                    /*Bank Transations*/
 /*********************************************************************************************************/
class Queue 
{
    constructor() 
    {
        this.items = [];
    }
    enQueue(data) 
    {
        this.items.push(data);
    }
    deQueue() 
    {
        if (this.isEmpty())
            return " ";

        return this.items.shift(); //remove element
    }
    isEmpty() 
    {
        //return true if the queue is empty
        return this.items.length == 0;
    }
    size() 
    {
        return this.size;
    }
    printList() 
    {
        var str = " ";
        for (let i = o; i < this.items.length; i++) 
        {
            str = str + this.items[i] + " ";
            return str;
        }
    }
}

/**********************************************************************************************************/
                                        /*StackLinkedList*/ 
 /*********************************************************************************************************/

class StackLinkedList {

    constructor() 
    {
        this.size = 0
        this.head = null;
    }
    size() {

        return this.size
    }
    isEmpty() 
    {
        /**
         * Condition to check the size is zero.
         */
        return top == null;
    }
    push(data) 
    {
        var n = new Node(data)
        if (this.head == null) 
        {
            this.head = n
            this.size++
        }
        else 
        {
            var temp = this.head
            while (temp.next) 
            {
                temp = temp.next
            }
            temp.next = n
            this.size++
        }
    }
    pop() 
    {
        if (this.head == null) 
        {
            console.log("Stack underflow");
            return null;
        }
        var curr = this.head;
        var pre = this.head;
        if (curr.next == null) 
        {
            this.head = null;
            return curr.data;
        }
        while (curr.next) 
        {
            pre = curr;
            curr = curr.next;
        }
        var data = curr.data
        pre.next = null;
        this.size--;
        return data;
    }
    peek() 
    {
        // check for empty stack 
        if (!isEmpty()) 
        {
            return high.data;
        }
        else 
        {
            console.log("Stack empty");
            return -1;
        }
    }
    print() 
    {
        var st = ""
        var temp = this.head
        while (temp) 
        {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }

    printShares() 
    {
        var arr = [];
        if (this.head == null) 
        {
            return null;
        } 
        else 
        {
            var temp = this.head;
            while (temp) 
            {
                arr.push(temp.data);
                temp = temp.next;
            }
            return arr;
        }
    }


}
/**********************************************************************************************************/
                                        /*LinkedListQueue*/ 
 /*********************************************************************************************************/
class LinkedListQueue 
{
    constructor() 
    {
        this.tail = null;
        this.head = null;
    }
    enQueue(item) 
    {
        let node = new Node(item);
        if (!this.head) 
        {
            this.head = node;
            this.tail = node;
        } 
        else 
        {
            this.tail.next = node;
            this.tail = node;
        }
    }
    deQueue() 
    {
        if (!this.head) 
        {
            return "No item";
        } else 
        {
            let itemToPop = this.head;
            this.head = this.head.next;
            return itemToPop.data;
        }
    }
    isEmpty() 
    {
        return this.size() < 1;
    }
    size() 
    {
        let current = this.head;
        let counter = 0;
        while (current) 
        {
            counter++;
            current = current.next;
        }
        return counter;
    }
    printList() 
    {
        var st = ""
        var temp = this.head
        while (temp) 
        {
            //console.log(temp.data)
            st = st + " " + temp.data
            temp = temp.next
        }
        return st;
    }
    printShares() 
    {
        var arr = [];
        if (this.head == null) 
        {
            return null;
        } else 
        {
            var temp = this.head;
            while (temp) 
            {
                arr.push(temp.data);
                temp = temp.next;
            }
            return arr;
        }
    }
    removeStock(element) 
    {
        var temp = this.head;
        var prev = null;
        while (temp != null) 
        {
            var stock = temp.data;
            if (stock.name == element) {
                if (prev == null) {
                    this.head = temp.next;
                } else {
                    prev.next = temp.next;
                }
                this.size--;
                return temp.data;
            }
            prev = temp;
            temp = temp.next;
        }
        return -1;
    }
}

/***********************************************DeQueueImplementation**********************************************/
                                               /*PalindromeChecker*/
/******************************************************************************************************************/
class DeQueue {

    constructor() {
        this.front = -1;
        this.rear = 0;
        this.size = 30;
        this.arr = new Array(30);
    }
    //to check queue is full or not
    isFull() {
        if (this.front == 0 && this.rear == this.size - 1 || (this.rear + 1 == this.front)) {
            return true;
        }
        return false;
    }
    //function to check queue is empty or not
    isEmpty() {
        return this.front == -1;
    }
    //function to add data to front on queue
    addFront(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;
        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == 0) {
            this.front = this.arr.length - 1;
        }
        else {
            this.front--;
        }
        this.arr[this.front] = item;
    }
    //function to add data into rear
    addRear(item) {
        if (this.isFull()) {
            console.log("Queue overflow");
            return;

        }
        if (this.front == -1) {
            this.front = 0;
            this.rear = 0;
        }
        else if (this.front == this.arr.length - 1) {
            this.rear = 0;
        }
        else {
            this.rear++;
        }
        this.arr[this.rear] = item;
    }
    removeFront() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;

        }
        var item;
        if (this.front == this.rear) {
            item = this.arr[this.front];
            this.front = -1;
            this.rear = -1;
        }
        else if (this.front == this.arr.length - 1) {
            item = this.arr[this.front];
            this.front--;
        }
        else {
            item = this.arr[this.front];
            this.front++;
        }
        return item;
    }
    removeRear() {
        if (this.isEmpty()) {
            console.log("Queue underflow");
            return;

        }
        var item;
        if (this.arear == this.front) {
            item = this.arr[this.rear];
            this.rear = -1;
            this.front = -1;
        }
        else if (this.rear == 0) {
            item = this.arr[this.rear];
            this.rear = this.rear--;
        }
        return item;
    }
    getFront() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.front];
    }
    getRear() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.arr[this.rear];
    }
    palindromeChecker(str) {
        try {
            for (let i = 0; i < str.length; i++) {
                this.addRear(str.charAt(i));
            }
            while (this.front != this.rear && this.front < this.rear) {
                if (this.getFront() != this.getRear()) {
                    return false;
                }
                this.front++;
                this.rear--;
            }
            return true;
        } catch (e) {
            console.log(e.message);
        }
    }
}

module.exports = {
    Node, LinkedList, Stack, Queue, DeQueue, StackLinkedList, LinkedListQueue,


    /***************************************************************************************************************************
     *@purpose Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
                   Store the prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200, 
                   and so on. While the second dimension represents the prime numbers in that range
     ***************************************************************************************************************************/
    isPrime(start, end) {
        let flag = 0;
        let k = 0;
        let prime = [];
        try {
            for (index1 = start; index1 <= end; index1++) {
                for (index2 = 2; index2 < index1; index2++) {
                    if (index1 % index2 == 0) {
                        flag = 0;
                        break;
                    }
                    else {
                        flag = 1;
                    }
                }
                if (flag == 1) {
                    prime[k++] = index1;
                }
            }
            return prime;
        } catch (error) {
            console.log(error.message);
        }

    },

    /****************************************************PrimeAnagram2DArray**********************************
     * @purpose  : Method for 2D Prime Anagram 
     **********************************************************************************************************/
    towDArray() {
        var arr = [];
        var arr2 = [];
        var array = [["0-100   "], ["100-200 "], ["200-300 "], ["300-400 "], ["400-500 "], ["500-600 "], ["600-700 "], ["700-800 "], ["800-900 "], ["900-1000 "]];
        try {
            for (let i = 2; i < 1000; i++) {
                if (utility.isPrime(i)) {
                    arr.push(i);
                }
            }
            var range = 100, k = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (utility.isAnagram(arr[i], arr[j])) {
                        if (arr[i] <= range) {
                            if (arr[j] <= range) {
                                array[k].push(arr[i]);
                                arr2.push(arr[i])
                                arr2.push(arr[j])
                                array[k].push(arr[j]);
                            }
                        } else {
                            range = range + 100;
                            k++;
                            if (arr[j] <= range) {
                                array[k].push(arr[i]);
                                array[k].push(arr[j]);
                            }
                        }
                    }
                }
            }
            console.log("The Number which are prime and anagram ");
            var req = require('/home/admin1/Bridgelabz_Programs/DataStructure/Utility/Util.js')
            for (let i = 0; i < array.length; i++) {
                var str = ""
                for (let j = 0; j < array[i].length; j++) {
                    req.print(array[i][j]);
                    // process.stdout.write(array[i][j]);
                    if (j == 0) {
                        // req.print("  ");
                        process.stdout.write("  ");
                    } else {
                        if (j != array[i].length - 1)
                            // req.print(",")
                            process.stdout.write(",");
                    }
                }
                console.log();
            }
            return arr2;
        } catch (e) {
            console.log(e.message);
        }
    }

}
