export class ConnectionError extends Error {
    constructor(message) {
        super(message)
        this.name = "ConnectionError"
    }
}

export class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
        this.stack = false
    }
}

export class AcceptError extends Error {
    constructor(message) {
        super(message)
        this.name = "AcceptError"
        this.stack = false
    }
}