'use strict'
// Imports
const D3Node = require('d3-node')

const drawBarGraph = (data) => {
  try {
    const options = {
      selector: '#chart',
      container: '<div id="container"><div id="chart"></div></div>',
    }

    // Create a d3-node object with the selector and the required d3 module.
    const d3n = new D3Node(options)
    const d3 = d3n.d3

    const margin = {
      top: 10,
      right: 5,
      bottom: 30,
      left: 5,
    }
    const width = 1000 - margin.left - margin.right
    const height = 450 - margin.top - margin.bottom
    const svgWidth = width + margin.left + margin.right
    const svgHeight = height + margin.top + margin.bottom

    // Create an svg element with the width and height defined.
    const svg = d3n.createSVG(svgWidth, svgHeight)

    // Create the scales for x-axis and y-axis.
    const xScale = d3.scaleBand().range([0, width]).padding(0.4)
    const yScale = d3.scaleLinear().range([height, 0])

    let yMax = d3.max(data, (d) => {
      return d.y
    })
    yMax += yMax * 0.3
    xScale.domain(
      data.map((d) => {
        return d.x
      }),
    )
    yScale.domain([0, yMax])

    // Set the background of the entire svg to a desired color. This will make the background look uniform on everyone's computer.
    svg
      .append('rect')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('fill', 'white')

    // Add a title text to your bar chart.
    svg
      .append('text')
      .attr('transform', 'translate(150,0)')
      .attr('x', 50)
      .attr('y', 50)
      .attr('font-size', '24px')
      .text('Top Scorer Bar Chart')

    // Append a group element to which the bars and axes will be added to.
    svg.append('g').attr('transform', `translate(${100},${100})`)

    // Appending x-axis
    svg
      .append('g')
      .attr('transform', `translate(50,${height})`)
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('y', height - 380)
      .attr('x', width - 500)
      .attr('text-anchor', 'end')
      .attr('stroke', 'black')
      .attr('font-size', '20px')
      .text('Date')

    // Appending y-aixs
    svg
      .append('g')
      .attr('transform', 'translate(50,0)')
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat((d) => {
            return `${d}(m)`
          })
          .ticks(5),
      )
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 150)
      .attr('x', -150)
      .attr('dy', '-9.1em')
      .attr('text-anchor', 'end')
      .attr('stroke', 'black')
      .attr('font-size', '20px')
      .text('Height (metres)')

    // Appending the bars
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('transform', 'translate(50,0)')
      .attr('class', 'bar')
      .attr('x', (d) => {
        return xScale(d.x)
      })
      .attr('y', (d) => {
        return yScale(d.y)
      })
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => {
        return height - yScale(d.y)
      })
      .style('fill', 'green')

    return d3n.svgString()
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = { drawBarGraph }
