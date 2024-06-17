<div align='center'>
    <img id='theme' src='https://github.com/XNeyMo/Liav/blob/main/assets/Liav.png' height='300px' alt='Logo' />
</div>

---

# RETAIL COMPANY

A large retail company has multiple legacy systems for e-commerce, in-store purchases, supply chain and inventory management. These systems were built over many years as separate silos with their own databases. With acquisitions and growth, the company now has a complex web of interconnected systems that don't share data well. Customer and product data is fragmented across systems, hampering analytics.

The lack of a unified view of customer and product data makes it difficult to deliver personalized omni-channel experiences. For example, online and in-store promotions are not coordinated, leading to inconsistent messaging. Inventory and supply chain processes are also suboptimal due to the inability to base decisions on a consolidated view across all systems and locations. The company needs an improved architecture to share data seamlessly across business capabilities to meet changing customer expectations.

The solution should decompose the existing monoliths into microservices by business capability. These services should expose their data via well-defined APIs that can be consumed by other services. An API gateway should handle cross-cutting concerns like security, monitoring, and rate limiting. For analytics, a central data lake can aggregate data from all systems. The focus should be on building a flexible, API-driven data architecture centered around key domains. There are some specifications:

* Implement unified APIs for customer profile, product catalog and inventory, order history data aggregated from all systems.
* Expose APIs to be consumed by various frontend apps and services.
* Use an API gateway pattern for security, traffic control, routing, monitoring, and rate limiting.
* Store consolidated data in a central data lake.
* Use data lake to power advanced analytics, machine learning and AI for recommendations.
