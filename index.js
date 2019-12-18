
/**
 * Little module to launch a function at a specific delay.
 */
'use strict'

const MAX_TIME_INTERVAL = 60000

class Reloader {
    /**
     * Constructor of the class
     */
    constructor (delay) {
        this.config_loaded = false
        this.content = {}
        this.functions = {}
        this.delay = delay || MAX_TIME_INTERVAL
    }

    /**
    * Set the interval timer
    */
    async init () {
        if (this.content_loaded) return this.content
        this.content_loaded = true
        await this.retrieve()
        this.timer = setInterval(this.retrieve.bind(this), this.delay)
        return this.content
    }

    /**
     * Add a new function
     *
     * @param {String} name: function's name
     * @param {Function} fn : function to run
     * @param {Number} delay : delay in ms between each run
     */
    addFunction (name, fn, delay) {
        this.functions[name] = { delay: delay || this.delay, fn: fn, lastUpdate: 0 }
    }

    /**
   * Get the result of a specific function
   *
   */
    get (name) {
        return this.content[name]
    }

    /**
   * Get all last results of all functions
   *
   */
    getAll () {
        return this.content
    }

    /**
   * Check the age of each functions and rerun it if necessary
   *
   */
    async retrieve () {
        const now = new Date()
        for (const key in this.functions) {
            const currentFn = this.functions[key]

            if (now - currentFn.lastUpdate > this.delay) {
                this.content[key] = await currentFn.fn()
                currentFn.lastUpdate = new Date()
            }
        }
    }
}

module.exports = Reloader
