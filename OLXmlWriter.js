/**
 *
 */
var OLXmlWriter = new function() {
	var that = this;
    this.strXML = '';
	this.xmlNodeStack = [];
		
	this.insertTextNode = function(nodeName, nodeValue) {
		that.strXML += '<' + that.sanitizeNodeName(nodeName) + '>' + that.sanitizeValue(nodeValue) + '</' + that.sanitizeNodeName(nodeName) + '>\n';	
	}
    this.insertCDataNode = function(nodeName, nodeValue) {
		that.strXML += '<' + that.sanitizeNodeName(nodeName) + '><![CDATA[' + nodeValue + ']]></' + that.sanitizeNodeName(nodeName) + '>\n';	
	}
	this.startNode = function(nodeName) {
		that.strXML += '<' + that.sanitizeNodeName(nodeName) + '>\n';
		
		that.xmlNodeStack.push(nodeName);
	}
	this.endNode = function () {
		var nodeName = that.xmlNodeStack.pop();
		
        if(nodeName != undefined) {
		  that.strXML += '</' + that.sanitizeNodeName(nodeName) + '>\n';
        }
	}
    this.getXmlStr = function() {
        while(that.xmlNodeStack.length > 0) {
            that.endNode();
        }
        return that.strXML;
    }
    
    this.sanitizeNodeName = function(nodeName) {
        // TODO
        return nodeName;
    }
    this.sanitizeValue = function(value) {
        // TODO
        return value;
    }
}