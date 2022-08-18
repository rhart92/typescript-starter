import { getUptime } from ".."

test("should get system uptime", () => {
	expect(getUptime()).toBeDefined()
})
